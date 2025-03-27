import { auth } from '../config/firebase-config.js';
import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

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
                // Create user profile in Firestore if it doesn't exist
                const userProfile = {
                    uid: result.user.uid,
                    email: result.user.email,
                    name: result.user.displayName,
                    photoURL: result.user.photoURL,
                    createdAt: new Date().toISOString()
                };
                
                // Redirect to initial assessment if new user
                window.location.href = '/pages/assessment.html';
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
