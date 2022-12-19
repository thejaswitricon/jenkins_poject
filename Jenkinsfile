pipeline {
        agent none
        stages {
          stage("build & SonarQube analysis") {
            environment {
           scannerHome = tool 'SonarQubeScanner'
}
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
