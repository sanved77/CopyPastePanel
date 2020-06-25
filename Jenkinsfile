pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh ('./copy-paste-panel/install.sh') 
                sh ('./copy-paste-panel/build.sh')
            }
        }
        stage('Deliver') {
            steps {
                sh ('cp -a copy-paste-panel/build/. ../cop') 
            }
        }
    }
}