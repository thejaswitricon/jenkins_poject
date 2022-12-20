pipeline {   
   agent any
   stages{
    stage('SonarQube analysis') {
      def scannerHome = tool 'SonarScanner 4.0';
      steps{
        withSonarQubeEnv('My SonarQube Server') {
        sh "${scannerHome}/bin/sonar-scanner"
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
