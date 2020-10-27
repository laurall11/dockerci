node {
  def app
  
  stage('Clone repository'){
    checkout scm
  }
  
  stage('build image'){
    app = sh 'npm ci'
  }
  
  stage('Test image'){
    sh 'npm test'
    sh 'docker ps -a'
  }
  
  
  stage('Push image'){
    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
      app.push("${env.BUILD_NUMBER}")
      app.push("latest")
    }
  }
}
