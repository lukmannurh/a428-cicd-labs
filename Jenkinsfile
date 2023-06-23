// declarative pipeline
// pipeline {
//     agent {
//         docker {
//             image 'node:16-buster-slim'
//             args '-p 7000:7000'
//         }
//     }
//     // parameters {
//     //     choice(
//     //         choices: ['Abort', 'Proceed'],
//     //         description: 'Pilih apakah ingin melanjutkan atau menghentikan eksekusi pipeline',
//     //         name: 'APPROVAL'
//     //     )
//     // }
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh './jenkins/scripts/test.sh'
//             }
//         }
//         stage('Manual Approval') {
//             steps {
//                 input message: 'Lanjutkan ke tahap Deploy?', submitter: 'user', parameters: [
//                     choice(name: 'APPROVAL', choices: ['Abort', 'Proceed'])
//                 ]
//             }
//         }
//         stage('Deploy') {
//             when {
//         expression { params.APPROVAL == 'Proceed' }
//             }
//             steps {
//                 sh './jenkins/scripts/deliver.sh'
//                 script {
//                     sleep(time: 60, unit: 'SECONDS')
//                 }
//                 sh './jenkins/scripts/kill.sh'
//             }
//         }

//     }
// }




// pipeline {
//     agent {
//         docker {
//             image 'node:16-buster-slim'
//             args '-p 3000:3000'
//         }
//     }
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh './jenkins/scripts/test.sh'
//             }
//         }
//         stage('Manual Approval') {
//             steps {
//                 input message: 'Lanjutkan ke tahap Deploy?', parameters: [
//                     [$class: 'ChoiceParameter', 
//                      choices: 'Proceed\nAbort', 
//                      description: 'Pilih apakah ingin melanjutkan atau menghentikan eksekusi pipeline',
//                      name: 'APPROVAL']
//                 ]
//             }
//         }
//         stage('Deploy') { 
//             when {
//                 expression { params.APPROVAL == 'Proceed' }
//             }
//             steps {
//                 sh './jenkins/scripts/deliver.sh' 
//                 timeout(time: 1, unit: 'MINUTES') {
//                     input message: 'Sudah selesai menggunakan React App? (Klik "Proceed" untuk mengakhiri)' 
//                 }
//                 sh './jenkins/scripts/kill.sh' 
//             }
//         }
//     }
// }




pipeline {
    agent {
        docker {
            image 'node:16-buster-slim'
            args '-p 7000:7000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deploy') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Sudah selesai menggunakan React App? (Klik "Proceed" untuk mengakhiri)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}


// scripted pipeline
// node {
//     docker.image('node:16-buster-slim').inside("-p 3000:3000") {
//         stage('Build') {
//             sh 'npm install'
//         }
//         stage('Test') {
//             sh './jenkins/scripts/test.sh'
//         }
//     }
// }



