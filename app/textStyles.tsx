import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  body: {
    description: 'Used in paragraphs',
    value: {
      color: '#2f2a22',
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '28px',
      textAlign: 'justify',
      textJustify: 'inter-word',
    }
  },
  heading1: {
    description: 'Used in <h1 /> tags',
    value: {
      color: '#2f2a22',
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '700',
      fontSize: '90px',
      lineHeight: '56px',
      marginBottom: '42px',
      marginTop: '70px',
      textShadow: [
        [-5, -5], [5, -5], [0, -5],
        [-5, 0], [5, 0], [0, 0],
        [-5, 5], [5, 5], [0, 5],
      ].map(([x, y]) => `${x}px ${y}px #F2E2CE`).join(', '),
    }
  },
  heading2: {
    description: 'Used in <h2 /> tags',
    value: {
      color: '#2f2a22',
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
      color: '#2f2a22',
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '700',
      fontSize: '36px',
      lineHeight: '56px',
      marginTop: '42px',
      marginBottom: '14px',
    }
  },
})
