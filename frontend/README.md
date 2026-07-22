# Frontend Calculator

A fully functional calculator built with vanilla HTML, CSS, and JavaScript.

## Features

### HTML Structure
- Semantic HTML5 markup
- Responsive viewport meta tag
- Accessible form inputs

### CSS Styling
- **Modern Design**: Gradient backgrounds and smooth animations
- **Responsive Layout**: Grid-based button layout that adapts to screen size
- **Interactive Elements**: Hover effects, active states, and transitions
- **Color Scheme**: Professional dark theme with accent colors
- **Typography**: Clear, readable fonts with proper hierarchy

### JavaScript Functionality
- **Calculator Class**: Object-oriented design for clean code
- **Arithmetic Operations**: Addition, subtraction, multiplication, division
- **Error Handling**: Division by zero prevention
- **Keyboard Support**: Full keyboard navigation and input
  - Numbers: `0-9`
  - Operations: `+`, `-`, `*`, `/`
  - Enter or `=` to calculate
  - Backspace to delete
  - Escape to clear
- **History Tracking**: Shows the last calculation performed
- **Input Validation**: Prevents multiple decimals, leading zeros

## How to Use

1. Open `index.html` in any modern web browser
2. Click buttons or use your keyboard to input numbers and operations
3. Press `=` or Enter to calculate
4. View your calculation in the history footer

## Code Structure

```javascript
Calculator Class Methods:
- clear()           // Reset calculator state
- delete()          // Remove last digit
- appendNumber()    // Add digit to current operand
- chooseOperation() // Select operation
- compute()         // Perform calculation
- updateDisplay()   // Update UI
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Accessibility

- Keyboard navigation support
- Clear visual feedback
- High contrast colors
- Readable font sizes
