pipeline {
        agent any
         environment {
           scannerHome = tool 'SonarQubeScanner'
}
        stages {
          stage("build & SonarQube analysis") {
           
            steps {
              withSonarQubeEnv('My SonarQube Server') {
                sh "${scannerHome}/bin/sonar-scanner"
              }
            }
          }
          stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate abortPipeline: true
              }
            }
          }
        }
      }
