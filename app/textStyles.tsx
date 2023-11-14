import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  body: {
    description: 'Used in paragraphs',
    value: {
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '28px',
    }
  },
  heading1: {
    description: 'Used in <h1 /> tags',
    value: {
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '700',
      fontSize: '90px',
      lineHeight: '56px',
      marginTop: '56px',
      marginBottom: '56px',
    }
  },
  heading2: {
    description: 'Used in <h2 /> tags',
    value: {
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '700',
      fontSize: '56px',
      lineHeight: '56px',
      marginTop: '28px',
      marginBottom: '28px',
    }
  },
  heading3: {
    description: 'Used in <h3 /> tags',
    value: {
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '700',
      fontSize: '36px',
      lineHeight: '56px',
      marginTop: '28px',
      marginBottom: '28px',
    }
  },
})
