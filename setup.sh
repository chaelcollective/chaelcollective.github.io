#!/bin/bash

# Chael Collective - Development Setup Script

echo "🌟 Setting up Chael Collective Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✓ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "✓ .env.local created. Please update with your values."
else
    echo "✓ .env.local already exists"
fi

echo ""
echo "✨ Setup complete! Ready to start developing."
echo ""
echo "Available commands:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run start   - Start production server"
echo "  npm run lint    - Run linting"
echo ""
echo "To get started:"
echo "  1. Update .env.local with your environment variables"
echo "  2. Run 'npm run dev' to start the development server"
echo "  3. Open http://localhost:3000 in your browser"
echo ""
echo "Happy coding! 💖"
