import { Code, Calendar, Zap, MapPin } from 'lucide-react';

export const NAME = "Venu";
export const ROLE = "DevOps & Site Reliability Engineer";

export const HERO_CONTENT = "Designing, automating, and operating highly available, secure, and observable cloud platforms. Passionate about Kubernetes, Infrastructure as Code, observability, and container security across AWS and GCP.";

export const ABOUT_TEXT = "I design, automate, and operate reliable cloud platforms that enable engineering teams to deliver software securely and at scale. With deep expertise in Site Reliability Engineering (SRE) and DevOps, my work focuses on building self-healing infrastructure, automating deployments, and maintaining highly available systems. I work extensively with AWS and Google Cloud Platform (GCP), using Terraform, Kubernetes, Docker, and CI/CD pipelines to build resilient environments. I specialize in cloud networking, load balancing, DDoS protection via Cloud Armor, centralized logging, and proactive monitoring. Using tools like GitHub Actions, Jenkins, Prometheus, Grafana, and Dynatrace, I help organizations optimize for reliability, scale dynamically, and ship software with high confidence.";

export const SKILLS = [
  // Cloud
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "cloud",
    level: 95,
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    category: "cloud",
    level: 90,
  },

  // Containers
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "containers",
    level: 95,
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    category: "containers",
    level: 90,
  },

  // Infrastructure
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    category: "infrastructure",
    level: 95,
  },
  {
    name: "Ansible",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg",
    category: "infrastructure",
    level: 85,
  },
  {
    name: "AWS CloudFormation",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg",
    category: "infrastructure",
    level: 80,
  },

  // DevOps / SRE
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg",
    category: "devops",
    level: 85,
  },
  {
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "devops",
    level: 95,
  },
  {
    name: "GitLab CI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    category: "devops",
    level: 85,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "devops",
    level: 95,
  },
  {
    name: "Prometheus",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "Grafana",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "Dynatrace",
    icon: "https://cdn.simpleicons.org/dynatrace",
    category: "devops",
    level: 85,
  },
  {
    name: "Bash Scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    category: "devops",
    level: 90,
  },

  // Development
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "development",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    category: "development",
    level: 80,
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    category: "development",
    level: 85,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "development",
    level: 80,
  },

  // Databases
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "database",
    level: 90,
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "database",
    level: 85,
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    category: "database",
    level: 90,
  }
];

export const PROJECTS = [
  {
    title: 'AWS EKS Production platform & GitOps Deployment',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Designed and implemented a production-ready AWS EKS infrastructure with automated GitOps application sync using ArgoCD. Integrated containerized builds, auto-scaling groups, SSL termination, dynamic DNS resolution, and automated rolling updates.',
    technologies: ['AWS EKS', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'Terraform', 'Docker', 'Route53'],
    category: 'devops',
    githubLink: 'https://github.com',
    websiteLink: '',
  },
  {
    title: 'Secured Multi-Environment IaC Automation',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Developed scalable Terraform modules to provision isolated Dev/Stage/Prod environments across AWS accounts. Integrated Atlantis to automate peer-reviewed plan applications directly via GitHub pull requests, eliminating configuration drift.',
    technologies: ['AWS', 'Terraform', 'Atlantis', 'GitHub Actions', 'VPC Peering', 'S3 backend'],
    category: 'devops',
    githubLink: 'https://github.com',
    websiteLink: '',
  },
  {
    title: 'Container Security & DevSecOps Compliance Pipeline',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Designed a security-focused CI/CD pipeline executing static application analysis, dynamic vulnerability checks, container scanning, and cryptographically signed image verification using Trivy, SonarQube, and Cosign prior to EKS push.',
    technologies: ['GitHub Actions', 'Trivy', 'SonarQube', 'Cosign', 'Docker', 'AWS ECR', 'Security Hub'],
    category: 'devops',
    githubLink: 'https://github.com',
    websiteLink: '',
  },
  {
    title: 'PostgreSQL Database Cluster Migration & Connection Pooling',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Managed a zero-downtime replication migration of a production PostgreSQL database to AWS RDS. Configured PgBouncer connection pooling to solve connection starvation, reducing database CPU utilization spikes significantly.',
    technologies: ['PostgreSQL', 'PgBouncer', 'AWS RDS', 'AWS DMS', 'Terraform', 'Prometheus'],
    category: 'devops',
    githubLink: 'https://github.com',
    websiteLink: '',
  }
];

export const CONTACT = {
  address: 'Hyderabad, Telangana, India',
  phoneNo: '+91 **********',
  email: 'venu.devops.sre@gmail.com',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};

export const BIO_TIMELINE = [
  {
    year: '2024 - Present',
    title: 'DevOps & Site Reliability Engineer',
    company: 'Cloud Scale Operations',
    description:
      'Operating scalable and self-healing multi-cloud environments. Designing infrastructure as code using Terraform, orchestrating microservices with Kubernetes, building secure CI/CD pipelines, and driving performance optimization and latency reductions.',
    icon: Code,
  },
  {
    year: '2020 - 2024',
    title: 'Systems & Cloud Associate',
    company: 'Infrastructure Services Corp',
    description:
      'Managed Linux environments, virtualized systems, automated server configurations with Ansible, and monitored database replicas. Transitioned legacy deployments to Docker containers and automated builds using Jenkins.',
    icon: Calendar,
  },
];

export const BIO_PHILOSOPHY = [
  {
    icon: Zap,
    title: 'Automation First',
    description: 'Every manual operation is a bug in waiting. Build declarative, automated systems that heal themselves.',
  },
  {
    icon: Code,
    title: 'Infrastructure as Code',
    description: 'Code defines environments. Infrastructure must undergo the same peer-review, linting, and testing as application code.',
  },
  {
    icon: MapPin,
    title: 'Proactive Observability',
    description: 'Metrics, logs, and traces form our eyes. If a system is degraded, monitors should alert us before users do.',
  },
];

export const BIO_STATS = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Cloud Platforms', value: 'AWS & GCP' },
  { label: 'Incident MTTR', value: '<15 min' },
  { label: 'Drift Restored', value: '100%' },
];

export const CASE_STUDIES = [ // as const // as const
  {
    id: 1,
    title: "Resolving Kubernetes OOMKilled Outage & Memory Leaks",
    subtitle: "Restoring E-Commerce Reliability During Traffic Spikes",
    category: "DevOps",
    featured: true,
    timeline: {
      start: "Nov 2025",
      end: "Dec 2025",
      duration: "1 month"
    },
    challenge: "During high-traffic events, critical Node.js pods entered repeated CrashLoopBackOff states due to Out-Of-Memory (OOM) kills. Legacy configurations lacked resource constraints, causing resource starvation across adjacent nodes and cascading outages.",
    solution: [
      "Analyzed Node.js heap allocations using heapdump inside staging pods, identifying an event listener leak.",
      "Configured precise Kubernetes resource requests and limits to shield nodes from memory exhaustion.",
      "Implemented Kubernetes horizontal pod autoscaling (HPA) using custom Prometheus metrics (HTTP requests/sec).",
      "Integrated KEDA (Kubernetes Event-driven Autoscaling) to handle queue consumer backlogs dynamically."
    ],
    impact: [
      "Eliminated OOMKilled service disruptions entirely, restoring uptime to 99.99%.",
      "Reduced incident Mean Time to Resolution (MTTR) by 75% via targeted alerting.",
      "Optimized compute resource allocation, reducing nodes in standard pools by 25%."
    ],
    technologies: ["Kubernetes", "EKS", "Prometheus", "Grafana", "KEDA", "Node.js"],
    impactMetrics: {
      deploymentTime: { before: "1.5 hours", after: "5 mins", improvement: "94%" },
      cost: { before: "$3,500/mo", after: "$2,625/mo", reduction: "25%" },
      availability: { uptime: "98.2%", improvement: "1.79%" }
    },
    architecture: {
      components: ["EKS Cluster", "Prometheus Operator", "Grafana Dashboards", "KEDA consumer", "VPC Node Groups"],
      pattern: "Event-driven Auto-scaling Microservices"
    }
  },
  {
    id: 2,
    title: "Global API Latency Tuning & DDoS Mitigation on GCP",
    subtitle: "Mitigating Layer 7 Threats with Cloud Armor & Load Balancing",
    category: "Cloud Infrastructure",
    featured: true,
    timeline: {
      start: "Aug 2025",
      end: "Oct 2025",
      duration: "2 months"
    },
    challenge: "A persistent Layer 7 DDoS attack overwhelmed downstream services, increasing global API latency from 150ms to over 4s. Casading failures in backend microservices resulted in server-side timeouts.",
    solution: [
      "Provisioned GCP Cloud Armor security policies with pre-configured WAF rules for SQLi, XSS, and rate limiting.",
      "Re-architected GCP Global HTTP(S) Load Balancer backend service configs, optimizing Edge CDN cache rules.",
      "Established Private Service Connect (PSC) to isolate communication between microservice projects.",
      "Set up Dynatrace service-flow telemetry to diagnose and trace latency bottlenecks in real-time."
    ],
    impact: [
      "Mitigated 99.9% of L7 malicious request floods at the edge with zero false positives.",
      "Reduced API response latency back to <120ms globally under load.",
      "Reduced cloud egress costs by 35% through efficient CDN caching rules."
    ],
    technologies: ["GCP", "Cloud Armor", "Load Balancing", "Dynatrace", "Terraform", "Private Service Connect"],
    impactMetrics: {
      performance: { improvement: "97% Latency Drop" },
      scalability: { capacity: "10M+ Requests/day", improvement: "500%" },
      availability: { uptime: "99.99%", improvement: "4.5%" }
    },
    architecture: {
      components: ["GCP Cloud Armor", "Global HTTPS Load Balancer", "GKE Backend Services", "Private Service Connect", "Dynatrace Agent"],
      pattern: "Secure Global Edge Load Balancing"
    }
  },
  {
    id: 3,
    title: "DevSecOps Migration & Atlantis Terraform Drift Resolution",
    subtitle: "Achieving Zero Drift with GitOps Infrastructure & Secure Containers",
    category: "DevOps",
    featured: false,
    timeline: {
      start: "Jun 2025",
      end: "Jul 2025",
      duration: "1.5 months"
    },
    challenge: "Manual operations in the cloud console resulted in severe infrastructure drift, making environments non-reproducible. Simultaneously, container images deployed to staging contained severe, unscanned security vulnerabilities.",
    solution: [
      "Refactored infrastructure to be defined 100% in declarative Terraform modules.",
      "Integrated Atlantis inside EKS to execute and apply Terraform changes exclusively via GitHub Pull Request approvals.",
      "Built GitHub Actions workflows executing Trivy image scanning, SonarQube quality gates, and Cosign image signing.",
      "Configured AWS Security Hub to automatically ingest scan reports and alert on compliance failures."
    ],
    impact: [
      "Achieved 100% Infrastructure as Code management, resolving drift to 0%.",
      "Blocked 100% of critical CVE container image builds in CI before reaching the registry.",
      "Eliminated direct write permissions to cloud consoles for engineering teams."
    ],
    technologies: ["Terraform", "Atlantis", "GitHub Actions", "Trivy", "Cosign", "AWS Security Hub"],
    impactMetrics: {
      deploymentTime: { before: "45 mins", after: "6 mins", improvement: "86%" },
      cost: { before: "Manual audit required", after: "0 drift state", reduction: "100% visibility" },
      performance: { improvement: "100% Scan Compliance" }
    },
    architecture: {
      components: ["Atlantis Pods", "Terraform Modules", "GitHub Actions Runners", "Trivy Scanner", "Cosign Keys", "ECR Registry"],
      pattern: "GitOps IaC & Cryptographically Verified CI/CD"
    }
  },
  {
    id: 4,
    title: "Zero-Downtime PostgreSQL RDS Database Migration",
    subtitle: "Resolving DB CPU Starvation & Connection Expiry",
    category: "Full-Stack",
    featured: false,
    timeline: {
      start: "Feb 2025",
      end: "Apr 2025",
      duration: "2 months"
    },
    challenge: "Production database CPU utilization spiked to 98% during business hours due to connection starvation. Query queues built up rapidly as clients established independent connections with no connection pooling.",
    solution: [
      "Provisioned an AWS RDS PostgreSQL multi-AZ database instance with optimized IOPS.",
      "Configured PgBouncer connection pooling layer in transaction mode to reuse backend database connections.",
      "Executed live migration of transactional tables with zero-downtime using AWS Database Migration Service (DMS).",
      "Deployed custom Prometheus SQL Exporter to track active/idle connections and lock contentions."
    ],
    impact: [
      "Increased server connection capacity 10x while dropping DB CPU utilization from 98% to 35%.",
      "Performed final switchover during live traffic with zero client downtime.",
      "Decreased API db connection acquisition timeouts by 99%."
    ],
    technologies: ["PostgreSQL", "PgBouncer", "AWS RDS", "AWS DMS", "Terraform", "Prometheus SQL Exporter"],
    impactMetrics: {
      cost: { before: "$1,800/mo (High CPU DB)", after: "$1,200/mo (Optimized DB)", reduction: "33%" },
      availability: { uptime: "99.95%", improvement: "0.45%" },
      scalability: { capacity: "3000 max clients", improvement: "1000%" }
    },
    architecture: {
      components: ["AWS RDS PostgreSQL Cluster", "PgBouncer Pods", "AWS DMS Replication Instances", "Prometheus SQL Exporter"],
      pattern: "High-Availability DB Replication & Pooled Connections"
    }
  }
] as const;

export const BLOG_POSTS = [ // as const
  {
    id: 1,
    title: "Scaling to Millions: A Deep Dive into Kubernetes Pod Auto-scaling Patterns",
    category: "DevOps",
    difficulty: "Advanced",
    readTime: "9 min read",
    date: "2025-05-18",
    featured: true,
    views: "3.4k",
    likes: "212",
    comments: "34",
    excerpt: "Go beyond standard CPU/Memory auto-scaling. Learn how to configure event-driven autoscaling with KEDA using RabbitMQ, Kafka, and custom Prometheus metrics.",
    tags: ["Kubernetes", "KEDA", "Autoscaling", "Prometheus", "SRE"],
    content: `
# Scaling to Millions: A Deep Dive into Kubernetes Pod Auto-scaling Patterns

Site Reliability Engineers must ensure that infrastructure scales fluidly before CPU exhaustion triggers application lag. In this guide, we dive into building event-driven pod autoscalers.

## The Pitfalls of Standard HPA

By default, the Kubernetes Horizontal Pod Autoscaler (HPA) queries CPU and Memory usage via Metrics Server:
- **Lag:** CPU spikes are lagging indicators. By the time CPU utilization reaches 85%, the application queue is already backlogged.
- **Incompatibility:** Non-CPU bound workers (such as message consumers) do not scale well based on core usage.

## Event-Driven Scaling with KEDA

Kubernetes Event-driven Autoscaling (KEDA) integrates custom Custom Resource Definitions (CRDs) directly into the Kubernetes API, scaling deployments from 0 to hundreds of pods based on external events.

### Step 1: Deploying KEDA to EKS

\`\`\`bash
helm repo add kedacore https://kedacore.github.io/charts
helm repo update
kubectl create namespace keda
helm install keda kedacore/keda --namespace keda
\`\`\`

### Step 2: Configuring a ScaledObject

We define a \`ScaledObject\` that scales consumer pods based on active queue length in Redis:

\`\`\`yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: redis-queue-scaler
  namespace: default
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: worker-app
  minReplicaCount: 1
  maxReplicaCount: 20
  triggers:
  - type: redis
    metadata:
      queueName: job_queue
      queueLength: "15"
      host: redis-master.default.svc.cluster.local
      port: "6379"
\`\`\`

## Monitoring Scaling Velocity

Always monitor scale-up speed and downscale cooldown periods to avoid pod "thrashing." Adjust the \`behavior\` policies in the HPA configuration blocks to damp downscaling during volatile periods.
    `
  },
  {
    id: 2,
    title: "Taming Terraform Drift: GitOps for Infrastructure with Atlantis",
    category: "Cloud Infrastructure",
    difficulty: "Intermediate",
    readTime: "11 min read",
    date: "2025-04-12",
    featured: true,
    views: "2.8k",
    likes: "189",
    comments: "18",
    excerpt: "Manual adjustments in cloud consoles destroy the reliability of IaC. Discover how to deploy Atlantis to run, review, and apply Terraform plans inside GitHub Pull Requests.",
    tags: ["Terraform", "Atlantis", "GitOps", "IaC", "AWS"],
    content: `
# Taming Terraform Drift: GitOps for Infrastructure with Atlantis

Infrastructure drift is the silent killer of deployments. When engineers perform manual edits in the AWS Console, the codebase ceases to represent reality.

## The GitOps Solution

Atlantis is a secure webhook application that integrates into your VCS (GitHub/GitLab) and executes Terraform plans and applies directly in pull requests:
- **Visibility:** Every engineer sees the exact plan output before approval.
- **Auditability:** Git logs become the timeline of infrastructure updates.
- **Security:** Credentials stay stored in a secure controller instead of engineer laptops.

## Atlantis Workflow in Action

1. **Create PR:** An engineer submits a PR modifying a VPC subnet.
2. **Auto-Plan:** Atlantis detects the changes, executes \`terraform plan\`, and comments the output on the PR.
3. **Peer Review:** A senior engineer reviews and approves the PR.
4. **Apply Command:** The author comments \`atlantis apply\` in the PR.
5. **Execution:** Atlantis runs \`terraform apply\`, locks state, and merges the PR.

## Security Controls

Configure branch protection rules to block approvals until Atlantis reports a successful plan. Implement OpenID Connect (OIDC) roles for Atlantis to authenticate dynamically with AWS instead of storing persistent access keys.
    `
  },
  {
    id: 3,
    title: "Incident Response 101: How to Lead a Blameless Post-Mortem",
    category: "DevOps",
    difficulty: "Beginner",
    readTime: "7 min read",
    date: "2025-03-05",
    featured: false,
    views: "4.1k",
    likes: "302",
    comments: "56",
    excerpt: "Outages are inevitable. What matters is how we learn from them. Learn the anatomy of an incident post-mortem that focuses on system failure rather than human blame.",
    tags: ["Incident Response", "SRE", "Outage", "Culture", "Best Practices"],
    content: `
# Incident Response 101: How to Lead a Blameless Post-Mortem

As SREs, we accept that complex systems fail. A blameless culture is critical to surfacing the actual systemic causes of failure, rather than naming and shaming individuals.

## What is a Blameless Post-Mortem?

Coined by John Allspaw, a blameless post-mortem assumes that well-intentioned, smart engineers make choices based on the information they had at the time.
- **Human Error is a symptom:** Human error is the beginning of the investigation, not the conclusion.
- **Focus on the system:** Why did the system permit the engineer to make a destructive change? Why did validation check blocks fail to catch the error?

## Structuring the Timeline

Document the timeline chronologically:
- **T0 (Incident Start):** Destructive deployment or event triggers spike.
- **T1 (Detection):** PagerDuty triggers based on threshold alarms.
- **T2 (Mitigation):** Rollback executed, or connections pooled.
- **T3 (Resolution):** Metrics return to baseline.

## Actionable Takeaways

Ensure every post-mortem results in specific, actionable tasks:
- **Prevent:** Code changes to prevent the bug.
- **Detect:** Alert additions to detect the failure mode faster next time.
- **Mitigate:** Build scripts to speed up manual resolution/rollback processes.
    `
  },
  {
    id: 4,
    title: "Securing the Supply Chain: Container Image Signing with Cosign and Trivy",
    category: "DevOps",
    difficulty: "Advanced",
    readTime: "10 min read",
    date: "2025-02-14",
    featured: false,
    views: "2.1k",
    likes: "145",
    comments: "14",
    excerpt: "Protect Kubernetes workloads from supply chain exploits. Step-by-step guide to scanning image vulnerability and signing it with Cosign inside GitHub Actions.",
    tags: ["Security", "CI/CD", "Trivy", "Cosign", "DevSecOps"],
    content: `
# Securing the Supply Chain: Container Image Signing with Cosign and Trivy

Workload security is a high priority. In this tutorial, we construct a secure pipeline that signs container images, ensuring only audited code runs in production.

## Secure CI/CD Workflow

1. **Build Container:** Compile the docker image.
2. **Scan Image:** Use Trivy to check for High/Critical CVE vulnerabilities.
3. **Assert:** Stop the build if critical vulnerabilities are found.
4. **Sign:** Use Cosign (from Sigstore) to cryptographically sign the build.
5. **Verify:** Kubernetes admission controllers verify the signature before runtime execution.

## GitHub Actions Configuration

Below is an extract of the signing workflow:

\`\`\`yaml
- name: Install Cosign
  uses: sigstore/cosign-installer@v3.1.1

- name: Sign container image
  run: |
    cosign sign --yes --key env://COSIGN_PRIVATE_KEY \
      \${{ steps.meta.outputs.tags }}
  env:
    COSIGN_PRIVATE_KEY: \${{ secrets.COSIGN_PRIVATE_KEY }}
    COSIGN_PASSWORD: \${{ secrets.COSIGN_PASSWORD }}
\`\`\`

By enforcing image verification, you protect your clusters from rogue images and malicious updates.
    `
  },
];

export const SPECIALIZATIONS = [
  'Cloud Architecture',
  'Site Reliability Engineering',
  'Infrastructure as Code',
  'CI/CD Automation',
  'Kubernetes & Containers',
  'DevSecOps Compliance'
];
