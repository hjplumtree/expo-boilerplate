import { supabase } from '../config/supabase';
import { useStore } from '../store';

// Sign in with email and password
export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      useStore.getState().login({
        id: data.user.id,
        email: data.user.email || '',
        name: data.user.user_metadata?.name || '',
      });
    }

    return { success: true, error: null };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Sign out current user
export async function signOut() {
  try {
    await supabase.auth.signOut();
    useStore.getState().logout();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Initialize - check if user is already logged in
export async function initializeAuth() {
  try {
    const { data } = await supabase.auth.getSession();
    
    if (data.session?.user) {
      useStore.getState().login({
        id: data.session.user.id,
        email: data.session.user.email || '',
        name: data.session.user.user_metadata?.name || '',
      });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Auth initialization error:', error);
    return { success: false };
  }
}
