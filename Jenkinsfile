pipeline {   
   agent any
    stages {
         stage("build & SonarQube analysis") {
              environment {
                SCANNER_HOME = tool 'sonarcloud'
                PROJECT_NAME = "jenkins_project"
            }
            steps {
                withSonarQubeEnv('sonarcloud') {
                    sh '''$SCANNER_HOME/bin/sonar-scanner \
                    //-Dsonar.organization=$ORGANIZATION \
                    -Dsonar.projectKey=$PROJECT_NAME \
                    -Dsonar.projectName=$PROJECT_NAME '''
                }
            }
          }
        }
}
