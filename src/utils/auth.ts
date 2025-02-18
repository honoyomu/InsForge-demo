export const INSFORGE_AUTH_URL = 'https://www.insforge.dev/auth?project_id=a03d70e9-ea11-45a9-8ff1-c1c06aef11a9&redirect_url=https%3A%2F%2F67b42d98ef80ad0008896c80--insforgedemo.netlify.app%2Fchat';
export const TOKEN_KEY = 'insforge_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;
  
  try {
    // Basic JWT validation (checks if token is properly formatted and not expired)
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const handleAuthRedirect = () => {
  if (window.location.hash) {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const token = hashParams.get('token');
    
    if (token) {
      setToken(token);
      // Clean URL hash
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      return true;
    }
  }
  return false;
};

export const redirectToAuth = () => {
  window.location.href = INSFORGE_AUTH_URL;
};

export const logout = () => {
  removeToken();
  window.location.href = '/';
}; 