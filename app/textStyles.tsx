import { defineTextStyles } from '@pandacss/dev'


const generateTextOutline = (n: number, color: string) => {
  const shadows = [];

  for (let x = 1; x <= n; x++) {
    shadows.push(...[
      [-x, -x], [x, -x], [0, -x],
      [-x, 0], [x, 0], [0, 0],
      [-x, x], [x, x], [0, x],
    ])
  }

  return shadows.map(([x, y]) => `${x}px ${y}px 1px ${color}`).join(', ')
}

export const textStyles = defineTextStyles({
  body: {
    description: 'Used in paragraphs',
    value: {
      color: '#08138a',
      fontFamily: 'Shantell Sans Variable, sans-serif',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '28px',
      textJustify: 'inter-word',
      textShadow: generateTextOutline(3, "#f7f0e8"),
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
      textShadow: generateTextOutline(3, "#f7f0e8"),
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
      textShadow: generateTextOutline(3, "#f7f0e8"),
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
      textShadow: generateTextOutline(3, "#f7f0e8"),
    }
  },
})
