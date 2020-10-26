node {
  def app
  
  stage('Clone repository'){
    checkout scm
  }
  
  stage('build image'){
    app = docker.build("rathalexander/dockerwebapp")
  }
  
  stage('Test image'){
    app.inside{
      sh 'echo "Tests passed"'
    }
  }
  
  
  stage('Push image'){
    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
      app.push("${env.BUILD_NUMBER}")
      app.push("latest")
    }
  }
}
