import { auth, db } from '../config/firebase-config.js';
import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const getStartedBtn = document.getElementById('getStarted');
    const messageDiv = document.getElementById('message');

    const showMessage = (msg, isError = false) => {
        messageDiv.textContent = msg;
        messageDiv.className = `message ${isError ? 'error' : 'success'}`;
        setTimeout(() => messageDiv.textContent = '', 3000);
    };

    const handleSignIn = async (button) => {
        button.classList.add('loading');
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            
            if (result.user) {
                // Check if user has completed Yo-Yo test
                const userDoc = await getDoc(doc(db, 'users', result.user.uid));
                
                if (userDoc.exists() && userDoc.data().lastYoyoTest) {
                    // User has completed Yo-Yo test, go to dashboard
                    window.location.href = '/pages/dashboard.html';
                } else {
                    // Check if initial assessment exists
                    const assessmentDoc = await getDoc(doc(db, 'assessments', result.user.uid));
                    
                    if (assessmentDoc.exists()) {
                        // Has assessment but no Yo-Yo test, go to Yo-Yo test
                        window.location.href = '/pages/yoyo-test.html';
                    } else {
                        // No assessment, start with that
                        window.location.href = '/pages/assessment.html';
                    }
                }
            }
        } catch (error) {
            showMessage('Login failed: ' + error.message, true);
            console.error('Login error:', error);
        } finally {
            button.classList.remove('loading');
        }
    };

    loginBtn?.addEventListener('click', (e) => handleSignIn(e.target));
    getStartedBtn?.addEventListener('click', (e) => handleSignIn(e.target));

    // Check if user is already logged in
    auth.onAuthStateChanged(user => {
        if (user) {
            window.location.href = '/pages/dashboard.html';
        }
    });
});
