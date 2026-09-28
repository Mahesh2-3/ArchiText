import { getAuthHeaders } from "./utils";

// Updates the user profile details
export const updateProfile = async (name) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
      method: "PUT",
      credentials: "include",
      headers: getAuthHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ name }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Updates the user password
export const changePassword = async (oldPassword, newPassword) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/password`, {
      method: "PUT",
      credentials: "include",
      headers: getAuthHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ oldPassword, newPassword }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Sends an OTP to the user email for password reset
export const sendOtp = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/send-otp`, {
      method: "POST",
      credentials: "include",
      headers: getAuthHeaders({
        "Content-Type": "application/json",
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Resets user password using the received OTP
export const resetPasswordWithOtp = async (otp, newPassword) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/reset-password`, {
      method: "POST",
      credentials: "include",
      headers: getAuthHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ otp, newPassword }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Deletes all account data for the user
export const deleteAllUserData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/data`, {
      method: "DELETE",
      credentials: "include",
      headers: getAuthHeaders(),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

