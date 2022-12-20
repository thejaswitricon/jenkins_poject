pipeline {   
   agent any
   stages{
    stage('SonarCloud') {
              environment {
                  SCANNER_HOME = tool 'sonarcloud'
                  PROJECT_NAME = "Your Project name"
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
   
    // stages {
    //      node {
    //             stage('SCM') {
    //               git 'https://github.com/thejaswitricon/jenkins_poject.git'
    //             }
    //             stage('SonarQube analysis') {
    //               def scannerHome = tool 'SonarScanner 4.0';
    //               withSonarQubeEnv('My SonarQube Server') { // If you have configured more than one global server connection, you can specify its name
    //               sh "${scannerHome}/bin/sonar-scanner"
    //               }
    //             }
    //           }
    //         }
}
