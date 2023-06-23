// declarative pipeline
pipeline {
    agent {
        docker {
            image 'node:16-buster-slim'
            args '-p 3000:3000'
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
        stage('Manual Approval') {
            steps {
                script {
                    def userInput = input(
                        id: 'userInput',
                        message: 'Lanjutkan ke tahap Deploy?',
                        parameters: [
                            booleanParam(
                                defaultValue: true,
                                description: 'Pilih opsi untuk melanjutkan atau menghentikan eksekusi pipeline.',
                                name: 'CONTINUE'
                            )
                        ]
                    )
                    if (!userInput) {
                        error('Pipeline execution aborted by user.')
                    }
                }
            }
        }
        stage('Deploy') {
            when {
                expression { params.ACTION == 'Proceed' }
            }
            steps {
                sh './jenkins/scripts/deliver.sh' 
                sleep 60
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}



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
//         stage('Deploy') { 
//             steps {
//                 sh './jenkins/scripts/deliver.sh' 
//                 input message: 'Sudah selesai menggunakan React App? (Klik "Proceed" untuk mengakhiri)' 
//                 sh './jenkins/scripts/kill.sh' 
//             }
//         }
//     }
// }


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



