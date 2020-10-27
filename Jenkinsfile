node {
  def app
  
  stage('Clone repository'){
    checkout scm
  }
  
  stage('build image'){
    sh 'npm ci'
    app = sh 'npm ci-rebuild'
  }
  
  stage('Test image'){
    sh 'npm test'
  }
  
  
  stage('Push image'){
    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
      app.push("${env.BUILD_NUMBER}")
      app.push("latest")
    }
  }
}
