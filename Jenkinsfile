#!/usr/bin/env groovy

pipeline {
  agent {
    docker {
      image 'brainbeanapps/nodejs-build-environment:latest'
    }
  }

  environment {
    PROJECT_JOB_NAME = "${env.JOB_NAME}"
    TARGET_ENV = ''
    PUBLIC_URL = ''
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Configure') {
      steps {
        script {
          PROJECT_JOB_NAME = env.JOB_NAME.replace("/${env.JOB_BASE_NAME}", '')
          if (env.BRANCH_NAME ==~ /^v\d+(.\d+(.\d)?)?$/) {
            TARGET_ENV = 'production'
            PUBLIC_URL = ''
          } else if (env.BRANCH_NAME ==~ /^v\d+(.\d+(.\d)?)?-\d+$/) {
            TARGET_ENV = 'staging'
            PUBLIC_URL = ''
          } else {
            TARGET_ENV = 'dev'
            PUBLIC_URL = ''
          }
        }
      }
    }

    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build') {
      steps {
        sh "PUBLIC_URL=\"${PUBLIC_URL}\" REACT_APP_TARGET_ENV=\"${TARGET_ENV}\" npm run compile"
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts artifacts: 'build/**/*.*', fingerprint: true
      }
    }

    // stage('Deploy') {
    //   when {
    //     allOf {
    //       anyOf {
    //         branch 'master'
    //         changeRequest target: 'master'
    //         branch 'rc/*'
    //         tag 'release/*'
    //       }
    //       expression {
    //         currentBuild.result == null || currentBuild.result == 'SUCCESS'
    //       }
    //     }
    //   }
    //   steps {
    //     build job: "${PROJECT_JOB_NAME}-deployment/${TARGET_ENV}", parameters: [string(name: 'ARTIFACTS_SOURCE', value: "../${env.JOB_NAME}"), string(name: 'ARTIFACTS_BUILD', value: "${env.BUILD_NUMBER}")], wait: false
    //   }
    // }
  }
}
