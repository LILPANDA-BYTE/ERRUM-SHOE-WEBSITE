<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Chosen Palette: Calm Harmony -->
    <!-- Application Structure Plan: The SPA is designed as a top-down narrative report. It starts with a high-level dashboard of key metrics (KPIs), then dives into specific sections: Technology Stack, User Flow, Feature Breakdown, and Storage. It concludes with a Future Enhancements roadmap. This linear, scroll-based structure was chosen to logically guide a user through the technical details of the source README, transforming the static text into an engaging, explorable format that's more digestible than the original document. -->
    <!-- Visualization & Content Choices: 
        - Project KPIs: (Info -> Inform -> Dynamic Stat Cards -> HTML/CSS) - Justification: Provides an immediate, high-impact summary.
        - Tech Stack: (Info: File counts -> Compare -> Donut Chart -> Chart.js/Canvas) - Justification: Best for showing parts of a whole composition.
        - User Flow: (Info: Page sequence -> Organize -> Flowchart Diagram -> HTML/CSS) - Justification: Clearly shows a process without external libraries, adhering to constraints.
        - Feature Breakdown: (Info: Features per page -> Compare -> Stacked Bar Chart -> Chart.js/Canvas) - Justification: Excellent for comparing categorical data across multiple dimensions.
        - Local Storage: (Info: Storage keys -> Inform -> Key-Value List -> HTML/CSS) - Justification: Simple and clear for technical data.
        - Future Enhancements: (Info: Roadmap items -> Organize -> Styled Ordered List -> HTML/CSS) - Justification: Effectively presents a ranked list.
    -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <title>Interactive Report: Shoe Website Project</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Teko:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f1de;
            color: #3d405b;
        }
        .header-font {
            font-family: 'Teko', sans-serif;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
            max-height: 450px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 400px;
            }
        }
        .card {
            background-color: #ffffff;
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .flow-step {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-left: 4px solid #e07a5f;
            background-color: #ffffff;
            border-radius: 0.25rem;
        }
        .flow-icon {
            font-size: 1.75rem;
            margin-right: 1rem;
            color: #3d405b;
        }
        .flow-arrow {
            height: 2rem;
            width: 4px;
            background-color: #e07a5f;
            margin: 0.5rem 0 0.5rem 1.5rem;
        }
        .nav-button {
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-weight: 600;
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;
            background-color: #fdfcf7;
            color: #81b29a;
            border: 2px solid #81b29a;
        }
        .nav-button.active, .nav-button:hover {
            background-color: #81b29a;
            color: #ffffff;
        }
    </style>
</head>
<body class="antialiased">

    <div class="container mx-auto px-4 py-8">
        
        <header class="text-center mb-12">
            <h1 class="header-font text-6xl font-semibold uppercase tracking-wide" style="color: #3d405b;">Project ERRUM</h1>
            <p class="text-2xl mt-2" style="color: #e07a5f;">An Interactive Application Analysis</p>
        </header>

        <nav class="sticky top-0 z-10 bg-opacity-80 backdrop-blur-md bg-f4f1de py-4 mb-12 flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            <button class="nav-button active" data-target="kpis">Overview</button>
            <button class="nav-button" data-target="tech">Technology</button>
            <button class="nav-button" data-target="flow">User Flow</button>
            <button class="nav-button" data-target="features">Features</button>
            <button class="nav-button" data-target="roadmap">Roadmap</button>
        </nav>

        <main id="main-content" class="space-y-16">
            
            <section id="kpis" class="scroll-mt-24">
                <h2 class="header-font text-4xl text-center mb-2" style="color: #3d405b;">Project At a Glance</h2>
                <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">This section provides a high-level summary of the project's key components, offering a quick quantitative overview of the application's scope and structure based on the source code files.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="card text-center">
                        <div class="header-font text-7xl font-bold" style="color: #81b29a;">11</div>
                        <p class="text-xl font-semibold mt-2">Core Files</p>
                    </div>
                    <div class="card text-center">
                        <div class="header-font text-7xl font-bold" style="color: #81b29a;">4</div>
                        <p class="text-xl font-semibold mt-2">User Pages</p>
                    </div>
                    <div class="card text-center">
                        <div class="header-font text-7xl font-bold" style="color: #81b29a;">5</div>
                        <p class="text-xl font-semibold mt-2">Core Technologies</p>
                    </div>
                    <div class="card text-center">
                        <div class="header-font text-7xl font-bold" style="color: #81b29a;">3</div>
                        <p class="text-xl font-semibold mt-2">Storage Keys</p>
                    </div>
                </div>
            </section>

            <section id="tech" class="scroll-mt-24">
                <h2 class="header-font text-4xl text-center mb-2" style="color: #3d405b;">Technology Stack</h2>
                <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">The application is built using a standard frontend stack. The chart below illustrates the composition of the project's codebase by file type, showing the balance between structure (HTML), presentation (CSS), and logic (JavaScript).</p>
                <div class="card">
                    <div class="chart-container">
                        <canvas id="techStackChart"></canvas>
                    </div>
                </div>
            </section>

            <section id="flow" class="scroll-mt-24">
                <h2 class="header-font text-4xl text-center mb-2" style="color: #3d405b;">User Interaction Flow</h2>
                <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">This diagram outlines the primary path a user takes through the website, from initial product discovery to the final payment step. Each stage represents a distinct page designed to move the user seamlessly through the purchasing funnel.</p>
                <div class="max-w-md mx-auto">
                    <div class="flow-step">
                        <div class="flow-icon">🏠</div>
                        <div>
                            <h3 class="font-bold text-lg">Homepage</h3>
                            <p class="text-sm text-gray-600">Browse products and add to cart.</p>
                        </div>
                    </div>
                    <div class="flow-arrow"></div>
                    <div class="flow-step">
                        <div class="flow-icon">🛒</div>
                        <div>
                            <h3 class="font-bold text-lg">Shopping Cart</h3>
                            <p class="text-sm text-gray-600">Review items and manage quantities.</p>
                        </div>
                    </div>
                    <div class="flow-arrow"></div>
                    <div class="flow-step">
                        <div class="flow-icon">💳</div>
                        <div>
                            <h3 class="font-bold text-lg">Checkout</h3>
                            <p class="text-sm text-gray-600">Select preferred payment method.</p>
                        </div>
                    </div>
                    <div class="flow-arrow"></div>
                    <div class="flow-step">
                        <div class="flow-icon">🔒</div>
                        <div>
                            <h3 class="font-bold text-lg">Payment Popup</h3>
                            <p class="text-sm text-gray-600">Enter payment credentials to finalize.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" class="scroll-mt-24">
                <h2 class="header-font text-4xl text-center mb-2" style="color: #3d405b;">Functionality Breakdown</h2>
                <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">The application's features are distributed across its pages to support specific user tasks. This chart compares the number of core functionalities on each page, categorized by their primary purpose: content display, user interaction, and navigation.</p>
                <div class="card">
                    <div class="chart-container">
                        <canvas id="featureChart"></canvas>
                    </div>
                </div>
            </section>

            <section id="roadmap" class="scroll-mt-24">
                <h2 class="header-font text-4xl text-center mb-2" style="color: #3d405b;">Future Enhancements Roadmap</h2>
                <p class="text-center text-gray-600 max-w-3xl mx-auto mb-8">To evolve from a frontend prototype to a full-fledged e-commerce platform, several key enhancements are planned. This roadmap prioritizes the next steps for development, focusing on backend integration, user features, and system robustness.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card">
                        <h3 class="header-font text-2xl font-semibold mb-2" style="color: #e07a5f;">High Priority</h3>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Backend & Database Integration</li>
                            <li>Live Payment Gateway Integration</li>
                            <li>User Account & Authentication System</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3 class="header-font text-2xl font-semibold mb-2" style="color: #e07a5f;">Medium Priority</h3>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Product Search Functionality</li>
                            <li>Dedicated Product Detail Pages</li>
                            <li>User Order History</li>
                        </ul>
                    </div>
                    <div class="card md:col-span-2">
                        <h3 class="header-font text-2xl font-semibold mb-2" style="color: #e07a5f;">Low Priority</h3>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Functional Coupon Code System</li>
                            <li>Advanced Error Handling & System Monitoring</li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>
    </div>

    <script>
        const palette = {
            navy: '#3d405b',
            green: '#81b29a',
            orange: '#e07a5f',
            yellow: '#f2cc8f',
            bg: '#f4f1de'
        };

        const tooltipTitleCallback = (tooltipItems) => {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
              return label.join(' ');
            }
            return label;
        };
        
        const techStackCtx = document.getElementById('techStackChart').getContext('2d');
        new Chart(techStackCtx, {
            type: 'doughnut',
            data: {
                labels: ['JavaScript', 'HTML', 'CSS'],
                datasets: [{
                    data: [4, 4, 3],
                    backgroundColor: [palette.yellow, palette.orange, palette.green],
                    borderColor: '#ffffff',
                    borderWidth: 4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { font: { size: 14, family: 'Roboto' }, color: palette.navy }
                    },
                    tooltip: { callbacks: { title: tooltipTitleCallback } }
                }
            }
        });

        const featureCtx = document.getElementById('featureChart').getContext('2d');
        new Chart(featureCtx, {
            type: 'bar',
            data: {
                labels: ['Homepage', 'Cart Page', 'Checkout Page', 'Payment Popup'],
                datasets: [
                    {
                        label: 'Display Features',
                        data: [3, 1, 1, 1],
                        backgroundColor: palette.green,
                    },
                    {
                        label: 'Interaction Features',
                        data: [2, 3, 1, 1],
                        backgroundColor: palette.orange,
                    },
                    {
                        label: 'Navigation Features',
                        data: [2, 2, 2, 1],
                        backgroundColor: palette.yellow,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { stacked: true, ticks: { color: palette.navy, font: { family: 'Roboto' } } },
                    y: { stacked: true, beginAtZero: true, ticks: { color: palette.navy, font: { family: 'Roboto' } } }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { font: { size: 14, family: 'Roboto' }, color: palette.navy }
                    },
                    tooltip: { callbacks: { title: tooltipTitleCallback } }
                }
            }
        });

        const navButtons = document.querySelectorAll('.nav-button');
        const sections = document.querySelectorAll('#main-content section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navButtons.forEach(button => {
                        button.classList.toggle('active', button.dataset.target === entry.target.id);
                    });
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

        sections.forEach(section => {
            observer.observe(section);
        });
        
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.target;
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

    </script>
</body>
</html>
