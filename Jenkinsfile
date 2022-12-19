pipeline {
        agent any
         environment {
           scannerHome = tool 'Sonar-scanner'
}
        stages {
          stage("build & SonarQube analysis") {
           
            steps {
              withSonarQubeEnv('My SonarQube Server') {
                sh "${scannerHome}/bin/sonar-scanner"
              }
            }
          }
        }
      }
