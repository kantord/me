import { defineTextStyles } from '@pandacss/dev'


export const textStyles = defineTextStyles({
  body: {
    description: 'Used in paragraphs',
    value: {
      color: 'token(colors.textColor)',
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '28px',
      textJustify: 'inter-word',
    }
  },
  heading1: {
    description: 'Used in <h1 /> tags',
    value: {
      color: 'token(colors.textColor)',
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '700',
      fontSize: '90px',
      lineHeight: '56px',
      marginBottom: '42px',
      marginTop: '70px',
    }
  },
  heading2: {
    description: 'Used in <h2 /> tags',
    value: {
      color: 'token(colors.textColor)',
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '700',
      fontSize: '56px',
      lineHeight: '56px',
      marginTop: '42px',
      marginBottom: '14px',
    }
  },
  heading3: {
    description: 'Used in <h3 /> tags',
    value: {
      color: 'token(colors.textColor)',
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '700',
      fontSize: '36px',
      lineHeight: '56px',
      marginTop: '42px',
      marginBottom: '14px',
    }
  },
})
