 
const GATE_SUBJECTS = [
    {
        id: 'algorithms',
        name: 'Algorithms',
        keywords: ['algorithm', 'sorting', 'searching', 'greedy', 'dynamic programming',
            'divide and conquer', 'graph traversal', 'shortest path', 'spanning tree',
            'asymptotic', 'recurrence', 'complexity analysis',
            // GateAtZeal abbreviation
            'dsa full test', 'dsa test',
            // GATEBOOK
            'algorithm design'],
        color: '#3498db',
        icon: '🔢'
    },
    {
        id: 'data_structures',
        name: 'Data Structures',
        keywords: ['data structure', 'linked list', 'stack', 'queue', 'tree', 'heap',
            'hashing', 'binary tree', 'bst', 'avl', 'b-tree',
            'array', 'trie',
            // GATEBOOK
            'basic ds', 'trees and graphs'],
        color: '#2ecc71',
        icon: '🌲'
    },
    {
        id: 'operating_systems',
        name: 'Operating Systems',
        keywords: ['operating system', 'process synchronization', 'scheduling', 'deadlock',
            'memory management', 'paging', 'segmentation', 'virtual memory',
            'file system', 'cpu scheduling',
            // GateAtZeal abbreviation (with boundary)
            'os full', 'os test', 'os round',
            // GATEBOOK
            'os1', 'os2', 'os3', 'os4'],
        color: '#e74c3c',
        icon: '⚙️'
    },
    {
        id: 'dbms',
        name: 'DBMS',
        keywords: ['database', 'dbms', 'sql', 'normalization', 'relational algebra',
            'transaction', 'concurrency', 'er model', 'er diagram', 'indexing',
            'database management', 'functional dependency', 'normal forms',
            'relational model',
            // GO Classes uses "Databases"
            'databases',
            // GATEBOOK
            'dbms1', 'dbms2', 'dbms3', 'dbms4',
            // GateAtZeal
            'dbms full', 'dbms test'],
        color: '#9b59b6',
        icon: '🗄️'
    },
    {
        id: 'computer_networks',
        name: 'Computer Networks',
        keywords: ['computer network', 'tcp', 'udp', 'routing',
            'subnetting', 'supernetting', 'osi', 'http', 'dns',
            'network layer', 'transport layer', 'application layer',
            'flow and error control', 'network security',
            // GateAtZeal abbreviation
            'cn full', 'cn test', 'cn round',
            // GATEBOOK
            'cn1', 'cn2', 'cn3', 'cn4'],
        color: '#f39c12',
        icon: '🌐'
    },
    {
        id: 'toc',
        name: 'Theory of Computation',
        keywords: ['theory of computation', 'automata', 'formal language',
            'regular expression', 'regular language',
            'context free', 'pushdown', 'turing machine', 'decidability',
            'cfg', 'dfa', 'nfa', 'pda', 'undecidability', 'rice theorem',
            'chomsky', 'finite automata', 'cfl', 'dcfl',
            'language properties',
            // GateAtZeal abbreviation
            'toc full', 'toc test', 'toc round',
            // GATEBOOK
            'toc1', 'toc2', 'toc3', 'toc4'],
        color: '#1abc9c',
        icon: '🤖'
    },
    {
        id: 'compiler_design',
        name: 'Compiler Design',
        keywords: ['compiler', 'lexical analysis', 'parsing', 'syntax analysis',
            'semantic', 'code generation', 'code optimization',
            'lr parser', 'slr', 'lalr', 'compiler design',
            // GateAtZeal
            'compiler full', 'compiler test',
            // GATEBOOK
            'compilers1', 'compilers2',
            // GO Classes PYQ
            'compilers gate'],
        color: '#e67e22',
        icon: '🔧'
    },
    {
        id: 'digital_logic',
        name: 'Digital Logic',
        keywords: ['digital logic', 'boolean algebra', 'flip flop', 'counter',
            'combinational circuit', 'sequential circuit', 'karnaugh',
            'k-map', 'multiplexer', 'decoder', 'number system',
            'minimization',
            // GateAtZeal abbreviation
            'dl -', 'dl-', 'digital test',
            // GATEBOOK
            'digital1', 'digital2', 'digital3'],
        color: '#c0392b',
        icon: '🔌'
    },
    {
        id: 'computer_organization',
        name: 'Computer Organization',
        keywords: ['computer organization', 'co and architecture', 'co & architecture',
            'pipeline', 'cache memory', 'cache',
            'instruction set', 'alu', 'memory hierarchy',
            'risc', 'cisc', 'microprocessor', 'addressing mode',
            'computer organisation',
            // GateAtZeal abbreviation
            'coa full', 'coa test', 'coa round',
            // GATEBOOK
            'coa1', 'coa2', 'coa3', 'coa4', 'coa5',
            'basics and alu', 'control unit', 'pipelining', 'memory and io'],
        color: '#8e44ad',
        icon: '🖥️'
    },
    {
        id: 'discrete_mathematics',
        name: 'Discrete Mathematics',
        keywords: ['discrete math', 'graph theory', 'set theory', 'combinatorics',
            'propositional logic', 'predicate logic', 'first order logic',
            'group theory', 'lattice', 'poset', 'discrete mathematics',
            'mathematical logic', 'permutation', 'recurrence relation',
            'proof technique', 'equivalence relation', 'relations',
            // GateAtZeal abbreviation
            'dm test', 'dm round', 'dm full',
            // GATEBOOK
            'dm3', 'dm4', 'dm5',
            // GO Classes PYQ folder names
            'set theory & algebra'],
        color: '#16a085',
        icon: '📐'
    },
    {
        id: 'engineering_mathematics',
        name: 'Engineering Mathematics',
        keywords: ['engineering math', 'linear algebra', 'calculus', 'probability',
            'statistics', 'differential equation', 'matrix', 'eigen',
            'integration', 'differentiation', 'laplace', 'fourier',
            'taylor series', 'limit, continuity', 'differentiability',
            'maxima and minima', 'conditional probability', 'bayes theorem',
            'probability distribution', 'hypothesis testing',
            'singular value decomposition', 'svd',
            'orthogonal projection', 'projection matrix',
            'change of basis', 'linear transformation',
            // GateAtZeal abbreviation
            'math full', 'math test', 'math round', "math's round",
            'maths + apt',
            // GATEBOOK
            'calculus 1', 'linear algebra 1', 'probability 1'],
        color: '#2980b9',
        icon: '📊'
    },
    {
        id: 'c_programming',
        name: 'C Programming',
        keywords: ['c programming', 'c-programming', 'programming in c',
            'c language', 'c lang',
            'pointer', 'recursion',
            'c prog', 'c-prog',
            // GO Classes
            'programming _ test', 'programming _ recursion',
            'c programming subject',
            // GATEBOOK
            'c programming, basic ds',
            // PYQ folder name
            'c programming -'],
        color: '#27ae60',
        icon: '💻'
    },
    {
        id: 'general_aptitude',
        name: 'General Aptitude',
        keywords: ['aptitude', 'verbal ability', 'verbal aptitude',
            'numerical ability', 'general aptitude',
            'quantitative aptitude', 'spatial aptitude',
            'analytical aptitude', 'reasoning',
            // GateAtZeal
            'aptitude full', 'aptitude-', '(aptitude)',
            'aptitude round'],
        color: '#95a5a6',
        icon: '🧠'
    }
];

// Keywords that indicate mixed/full-length tests (not subject-specific)
const MIXED_EXAM_KEYWORDS = [
    'full length', 'full_length',
    'mock test', 'mock gate', 'mock -',
    'all india mock', 'aimt',
    'grand test', 'comprehensive',
    'custom mix', 'mix subjects', 'mixed subjects',
    'gate pyq year', 'year wise', 'year_wise',
    // Full GATE papers (PYQ year papers)
    'gate cse 20', 'gate cse 19', 'gate it 20', 'gate it 19',
    'gate ds&ai', 'gate da 20',
    'original paper', 'set-1', 'set-2',
    'memory based gate',
    // Other exam types (not subject-specific)
    'isro 20', 'isro 19',
    'tifr cse', 'tifr mathematics',
    'ugc net', 'nielit', 'uppcl',
    'iiith pgee', 'scholarship test',
    'gate da 2025'
];

// Regex to detect multi-subject revision exams like "OS + DBMS + C Lang"
const MULTI_SUBJECT_REGEX = /\b(os|cn|coa|dbms|digital|compiler|toc|dm|dsa|ada|math|apt|c[ -]?(?:lang|prog))\s*\+\s*/i;

/**
 * Detects the subject of an exam from its title.
 * Returns the subject object or null if it's a mixed/unidentifiable exam.
 */
function detectSubject(title) {
    if (!title) return null;
    // Normalize: replace underscores with spaces so keywords match both formats
    const lower = title.toLowerCase().replace(/_/g, ' ');

    // Skip mixed/full-length exams
    for (const kw of MIXED_EXAM_KEYWORDS) {
        if (lower.includes(kw)) return null;
    }

    // Skip multi-subject revision exams (e.g. "OS + DBMS + C Lang", "COA + Digital")
    if (MULTI_SUBJECT_REGEX.test(lower)) return null;

    // Handle ambiguous "programming" keyword: only match C Programming
    // when "programming" appears WITHOUT other subject context
    // (GO Classes uses bare "Programming" for C Programming tests)
    const isProgrammingOnly = /\bprogramming\b/i.test(lower) &&
        !lower.includes('c programming') && !lower.includes('c-programming') &&
        !lower.includes('c prog') && !lower.includes('c-prog') &&
        !lower.includes('programming in c') &&
        !lower.includes('python');

    // Score each subject by keyword matches
    let bestMatch = null;
    let bestScore = 0;

    for (const subject of GATE_SUBJECTS) {
        let score = 0;
        for (const kw of subject.keywords) {
            if (lower.includes(kw)) {
                // Longer keyword matches are more specific
                score += kw.length;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestMatch = subject;
        }
    }

    // If only bare "programming" matched — assign to C Programming
    if (isProgrammingOnly && bestScore === 0) {
        bestMatch = GATE_SUBJECTS.find(s => s.id === 'c_programming');
        bestScore = 11; // "programming".length
    }

    // Handle DSA combined titles — check if both DS and Algo keywords present
    if (bestMatch && lower.includes('data structure') && lower.includes('algorithm')) {
        bestMatch = GATE_SUBJECTS.find(s => s.id === 'algorithms');
    }

    // Handle "TOC_Disc_Comp" — GateAtZeal mixed TOC+Disc, assign to TOC
    if (lower.includes('toc disc comp') || lower.includes('toc_disc_comp')) {
        bestMatch = GATE_SUBJECTS.find(s => s.id === 'toc');
        bestScore = 20;
    }

    // Handle the "Fundamental Course" quizzes — these are about C Programming basics
    if (lower.includes('fundamental course') && !lower.includes('linear algebra')) {
        bestMatch = GATE_SUBJECTS.find(s => s.id === 'c_programming');
        bestScore = 18;
    }

    return bestScore > 0 ? bestMatch : null;
}

/**
 * Detects exam source from its title for filtering.
 */
function detectSource(title) {
    if (!title) return 'Unknown';
    const lower = title.toLowerCase();

    if (lower.includes('go classes') || lower.includes('go 2021') || lower.includes('go 2022') ||
        lower.includes('go 2023')) return 'GO Classes';
    if (lower.includes('gate overflow')) return 'GATE Overflow';
    if (lower.includes('gatebook')) return 'GATEBOOK';
    if (lower.includes('bikram')) return 'Test by Bikram';
    if (lower.includes('applied course')) return 'Applied Course';
    if (lower.includes('zeal') || lower.includes('test id')) return 'GateAtZeal';
    if (lower.includes('made easy')) return 'Made Easy';
    if (lower.includes('tifr')) return 'TIFR';
    if (lower.includes('ugc net')) return 'UGC NET';
    if (lower.includes('isro')) return 'ISRO';
    if (lower.includes('nielit')) return 'NIELIT';
    if (lower.includes('iiith pgee')) return 'IIITH PGEE';
    if (lower.includes('gate cse') || lower.includes('gate da') || lower.includes('gate it')) return 'PYQ';
    if (lower.includes('pyq') || lower.includes('previous gate') || lower.includes('previous year')) return 'PYQ';

    if (lower.includes('test series')) return 'Test Series';
    return 'Other';
}
