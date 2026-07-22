const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Calculation history (in-memory storage)
let calculationHistory = [];

// Routes

/**
 * GET /
 * Serve the calculator homepage
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

/**
 * POST /api/calculate
 * Perform a calculation
 * Body: { operand1: number, operation: string, operand2: number }
 */
app.post('/api/calculate', (req, res) => {
    try {
        const { operand1, operation, operand2 } = req.body;

        // Validate input
        if (operand1 === undefined || operand2 === undefined || !operation) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);

        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: 'Invalid numbers' });
        }

        let result;

        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    return res.status(400).json({ error: 'Cannot divide by zero' });
                }
                result = num1 / num2;
                break;
            default:
                return res.status(400).json({ error: 'Invalid operation' });
        }

        // Add to history
        const calculation = {
            operand1: num1,
            operation: operation,
            operand2: num2,
            result: result,
            timestamp: new Date().toISOString()
        };
        calculationHistory.push(calculation);

        res.json({
            result: result,
            calculation: `${num1} ${operation} ${num2} = ${result}`
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error', message: error.message });
    }
});

/**
 * GET /api/history
 * Get all calculations from history
 */
app.get('/api/history', (req, res) => {
    res.json({
        count: calculationHistory.length,
        history: calculationHistory
    });
});

/**
 * DELETE /api/history
 * Clear calculation history
 */
app.delete('/api/history', (req, res) => {
    calculationHistory = [];
    res.json({ message: 'History cleared' });
});

/**
 * GET /api/stats
 * Get calculation statistics
 */
app.get('/api/stats', (req, res) => {
    if (calculationHistory.length === 0) {
        return res.json({
            totalCalculations: 0,
            stats: 'No calculations yet'
        });
    }

    const stats = {
        totalCalculations: calculationHistory.length,
        operationCounts: {}
    };

    calculationHistory.forEach(calc => {
        stats.operationCounts[calc.operation] = 
            (stats.operationCounts[calc.operation] || 0) + 1;
    });

    res.json(stats);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Calculator server is running on http://localhost:${PORT}`);
    console.log(`📱 Frontend: http://localhost:${PORT}`);
    console.log(`📊 API Documentation:`);
    console.log(`   POST   /api/calculate`);
    console.log(`   GET    /api/history`);
    console.log(`   DELETE /api/history`);
    console.log(`   GET    /api/stats\n`);
});