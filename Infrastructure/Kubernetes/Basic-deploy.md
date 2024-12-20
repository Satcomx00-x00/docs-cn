---
layout: doc
title: Kubernetes with Portainer Installation Guide
description: A comprehensive guide for deploying Kubernetes and Portainer on Linux
---

# Kubernetes with Portainer Deployment Guide

## Prerequisites

Before beginning the installation, ensure your system meets these requirements:

- Linux server (Ubuntu 22.04+ or Debian 11+ recommended)
- Minimum 2 CPU cores
- Minimum 4GB RAM
- At least 20GB free disk space
- Root or sudo access
- Internet connectivity

## Environment Configuration

Create a `.env` file to store our configuration variables:

```bash
# Kubernetes Configuration
POD_NETWORK_CIDR=10.244.0.0/16
SERVICE_CIDR=10.96.0.0/12

# Node Configuration
NODE_IP=192.168.1.100  # Change to your server IP
HOSTNAME=k8s-master

# Portainer Configuration
PORTAINER_VERSION=ce-latest-ee-2.19.1
PORTAINER_PORT=30777
```

## System Preparation

First, let's update the system and install necessary dependencies:

```bash
# Update system
sudo apt-get update && sudo apt-get upgrade -y

# Install required packages
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    software-properties-common
```

## Container Runtime Installation

We'll install and configure containerd:

```bash
# Install containerd
sudo apt update
sudo apt install -y containerd

# Create containerd configuration directory
sudo mkdir -p /etc/containerd

# Generate default configuration
containerd config default | sudo tee /etc/containerd/config.toml >/dev/null 2>&1

# Update SystemdCgroup setting
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml

# Restart containerd
sudo systemctl restart containerd
sudo systemctl enable containerd
```

## Kubernetes Installation

### 1. Configure System Settings

```bash
# Load required modules
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# Configure sysctl parameters
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

sudo sysctl --system
```

### 2. Install Kubernetes Components

```bash
# Create keyring directory
sudo mkdir -p /etc/apt/keyrings

# Add Kubernetes repository
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list

# Install Kubernetes components
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

### 3. Initialize Kubernetes Cluster

```bash
# Initialize the cluster
sudo kubeadm init \
    --pod-network-cidr=${POD_NETWORK_CIDR} \
    --service-cidr=${SERVICE_CIDR} \
    --node-name=${HOSTNAME} \
    --apiserver-advertise-address=${NODE_IP}

# Configure kubectl for the current user
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

### 4. Install Network Plugin (Calico)

```bash
# Apply Calico network plugin
kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml
```

## Portainer Installation

### 1. Create Required Directories

```bash
sudo mkdir -p /volumes/portainer
```

### 2. Deploy Portainer

Run:

```bash
kubectl apply -n portainer -f https://downloads.portainer.io/ce2-16/portainer.yaml
```

## Verification

### 1. Check Kubernetes Status

```bash
# Verify nodes
kubectl get nodes

# Check all pods
kubectl get pods -A

# Verify system pods
kubectl get pods -n kube-system
```

### 2. Check Portainer Status

```bash
# Check Portainer deployment
kubectl get pods -n portainer

# Check Portainer service
kubectl get svc -n portainer
```

## Accessing Portainer

Once everything is running, you can access Portainer through your browser:

```
http://<your-server-ip>:${PORTAINER_PORT}
```

::: tip Initial Setup
When accessing Portainer for the first time:
1. Create an admin user with a strong password
2. Choose "Get Started"
3. Select the local Kubernetes environment
4. Begin managing your cluster
:::

## Troubleshooting

### Common Issues and Solutions

1. **Pod Network Issues**:
```bash
# Check pod status
kubectl get pods -A
# Check pod logs
kubectl logs <pod-name> -n <namespace>
```

2. **Node Status Issues**:
```bash
# Check node conditions
kubectl describe node <node-name>
```

3. **Portainer Access Issues**:
```bash
# Check service status
kubectl get svc -n portainer
# Check endpoints
kubectl get endpoints -n portainer
```

4. **Container Runtime Issues**:
```bash
# Check containerd status
sudo systemctl status containerd

# View containerd logs
sudo journalctl -u containerd
```

## Security Considerations

::: tip Security Best Practices
1. Regularly update Kubernetes and Portainer
2. Use strong passwords for Portainer admin
3. Implement network policies
4. Enable RBAC for all resources
5. Regular security audits
6. Keep containerd and Kubernetes components updated
:::

## Maintenance

### Backup Procedure

Create a backup script `backup-k8s.sh`:

```bash
#!/bin/bash

# Backup directory
BACKUP_DIR="/backups/$(date +%Y%m%d)"
sudo mkdir -p $BACKUP_DIR

# Backup etcd
sudo cp -r /var/lib/etcd $BACKUP_DIR/

# Backup certificates
sudo cp -r /etc/kubernetes/pki $BACKUP_DIR/

# Backup Portainer data
sudo cp -r /volumes/portainer $BACKUP_DIR/
```

### Updates

```bash
# Update Kubernetes components
sudo apt-get update
sudo apt-get upgrade -y kubelet kubeadm kubectl

# Update Portainer
kubectl set image deployment/portainer portainer=portainer/portainer-ce:${PORTAINER_VERSION} -n portainer
```

This completes the installation guide. Your Kubernetes cluster with Portainer should now be operational and ready for use.