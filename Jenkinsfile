pipeline{
    agent any
    stages{
        stage('Hello'){
            steps{
                echo "Checking World"
            }
        }
        stage('World'){
            steps{
                echo "Second Stage"
            }
        }
        stage('Third'){
            steps{
                echo "New Stage"
            }
        }
        stage('SonarQube analysis') {
    def scannerHome = tool 'SonarScanner 4.0';
    withSonarQubeEnv('My SonarQube Server') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
    }
}
