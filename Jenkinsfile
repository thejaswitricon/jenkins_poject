pipeline {
  agent any
  stages {
    stage('SonarQube analysis') {
      steps {
        script {
          // requires SonarQube Scanner 2.8+
          scannerHome = tool 'SonarQube scanner'
        }
        withSonarQubeEnv('SonarQube scanner') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }
  }
}

// pipeline {   
//    agent any
//    stages{
//     stage('SonarQube Analysis') {
//               environment {
//                   SCANNER_HOME = tool 'SonarQube scanner'
//                   PROJECT_NAME = "jenkins_project"
//               }
//               steps {
//                   withSonarQubeEnv('SonarQube scanner') {
//                       sh '''$SCANNER_HOME/bin/sonar-scanner \
//                       //-Dsonar.organization=$ORGANIZATION \
//                       -Dsonar.projectKey=$PROJECT_NAME \
//                       -Dsonar.projectName=$PROJECT_NAME '''
//                   }
//               }
//           }
//    }
   
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
//}
