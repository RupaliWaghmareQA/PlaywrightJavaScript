/**
 * Test data for the Croma suite.
 *
 * Credentials come from env vars — never hardcode a real phone number.
 * Set CROMA_MOBILE (and, if you automate OTP, CROMA_OTP) before running the
 * auth setup. OTP arrives via SMS, so it cannot be a static fixture.
 */
export const account = {
  mobile: process.env.CROMA_MOBILE ?? '',
  otp: process.env.CROMA_OTP ?? '',
} as const;

export const searchTerms = {
  common: 'laptop',
  phone: 'iphone',
  tv: 'television',
  noResults: 'zzzqwxnonexistentproduct',
} as const;

export const pincodes = {
  mumbai: '400001',
  delhi: '110001',
} as const;
