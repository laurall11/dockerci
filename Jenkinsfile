node {
  def app
  
  stage('Clone repository'){
    checkout scm
  }
  
  stage('build image'){
    sh 'npm ci'
  }
  
  stage('Test image'){
    sh 'npm test'
  }
}
