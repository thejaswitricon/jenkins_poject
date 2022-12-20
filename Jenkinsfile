pipeline {
        agent any
         environment {
           scannerHome = tool 'Sonar-scanner'
}
        stages {
          stage('SonarCloud') {
            environment {
                SCANNER_HOME = tool 'sonarcloud'
                PROJECT_NAME = "Your Project name"
            }
                  
                  
                  
                  
                  
                  
                  
//             steps {
//               withSonarQubeEnv('My SonarQube Server') {
//                 sh "${scannerHome}/bin/sonar-scanner"
              }
            }
      }
