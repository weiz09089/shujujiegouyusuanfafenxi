const QUESTIONS = {
  "choice": [
    {
      "type": "choice",
      "question": "以下不属于存储结构是( )。",
      "answerStr": "A",
      "options": [
        "栈",
        "二叉链",
        "哈希表",
        "双链表"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "以下数据结构中( )属非线性结构。",
      "answerStr": "D",
      "options": [
        "栈",
        "串",
        "队列",
        "平衡二叉树"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "算法的平均时间复杂度取决于（ ）。",
      "answerStr": "A",
      "options": [
        "问题的规模",
        "待处理数据的初始状态",
        "A 和 B",
        "计算机的配置"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "以下数据结构中元素之间为非线性关系的是( )。",
      "answerStr": "D",
      "options": [
        "栈",
        "队列",
        "线性表",
        "以上都不是"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "某算法的空间复杂度为 O(1)，则( )。",
      "answerStr": "B",
      "options": [
        "该算法执行不需要任何辅助空间",
        "该算法执行所需辅助空间大小与问题规模 n 无关",
        "该算法执行不需要任何空间",
        "该算法执行所需全部空间大小与问题规模 n 无关"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "数据结构是指（ ）。",
      "answerStr": "D",
      "options": [
        "一种数据类型",
        "数据的存储结构",
        "一组性质相同的数据元素的集合",
        "相互之间存在一种或多种特定关系的数据元素的集合"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "与单链表相比，双链表的优点之一是 ( )。",
      "answerStr": "D",
      "options": [
        "插入、删除操作更简单",
        "可以进行随机访问",
        "可以省略表头指针或表尾指针",
        "访问前后相邻结点更方便"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "顺序表和链表相比存储密度较大，这是因为( )。",
      "answerStr": "B",
      "options": [
        "顺序表的存储空间是预先分配的",
        "顺序表不需要增加指针来表示元素之间的逻辑关系",
        "链表中所有结点的地址是连续的",
        "顺序表中所有元素的存储地址是不连续的"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "设线性表中有 n 个元素，以下运算中( )在单链表上实现要比在顺序表上实现效率更高。",
      "answerStr": "A",
      "options": [
        "删除指定地址（位置）元素的后一个元素",
        "在最后一个元素的后面插入一个新元素",
        "顺序输出前 k 个元素",
        "交换第 i 个元素和第 n-i+1 个元素的值（i=1，2，…，n）"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "顺序表具有随机存取特性，指的是（ ）。",
      "answerStr": "C",
      "options": [
        "查找值为 x 的元素与顺序表中元素个数 n 无关",
        "查找值为 x 的元素与顺序表中元素个数 n 有关",
        "查找序号为 i 的元素与顺序表中元素个数 n 无关",
        "查找序号为 i 的元素与顺序表中元素个数 n 有关"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "以下关于顺序表的叙述中，正确的是（ ）。",
      "answerStr": "C",
      "options": [
        "顺序表可以利用一维数组表示，因此顺序表与一维数组在结构上是一致的，它们可以",
        "在顺序表中，逻辑上相邻的元素在物理位置上不一定相邻",
        "顺序表和一维数组一样，都可以进行随机存取",
        "在顺序表中每一个元素的类型不必相同"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "一个顺序表所占用存储空间的大小与（ ）无关。",
      "answerStr": "D",
      "options": [
        "顺序表长度",
        "顺序表中元素的数据类型",
        "顺序表中元素各数据项的数据类型",
        "顺序表中各元素的存放次序"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "关于线性表的正确说法是（ ）。",
      "answerStr": "D",
      "options": [
        "每个元素都有一个前趋和一个后继元素",
        "线性表中至少有一个元素",
        "表中元素的排序顺序必须是由小到大或由大到小",
        "除第一个元素和最后一个元素外，其余每个元素有且仅有一个前趋和一个后继元素"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "线性表的顺序存储结构是一种（ ）。",
      "answerStr": "A",
      "options": [
        "随机存取的存储结构",
        "顺序存取的存储结构",
        "索引存取的存储结构",
        "散列存取的存储结构"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "线性表是（ ）。",
      "answerStr": "A",
      "options": [
        "一个有限序列，可以为空",
        "一个有限序列，不可以为空",
        "一个无限序列，可以为空",
        "一个无限序列，不可以为空"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "线性表有一个特点（ ）。",
      "answerStr": "B",
      "options": [
        "至少有两个元素，即开始元素和终端元素",
        "若没有开始元素，则一定没有终端元素",
        "每个元素必须有一个前趋元素",
        "任何一个元素都还可能既是开始元素又是终端元素"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "线性表是具有 n 个（ ）的有限序列。",
      "answerStr": "C",
      "options": [
        "表元素",
        "字符",
        "数据元素",
        "数据项"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "以下最适合用作链队的不带头结点的链表是（ ） 。",
      "answerStr": "D",
      "options": [
        "只带首结点指针的循环单链表",
        "只带尾结点指针的单链表",
        "只带首结点指针的单链表",
        "只带尾结点指针的循环单链表"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "两个栈采用顺序存储结构时，共享同一个数组空间的好处是（ ）。",
      "answerStr": "B",
      "options": [
        "减少存取时间，降低下溢出发生的机率",
        "节省存储空间，降低上溢出发生的机率",
        "减少存取时间，降低上溢出发生的机率",
        "节省存储空间，降低下溢出发生的机率"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "假设一个队列用链队方式存储，队头指针指向队头结点，队尾指针指向队尾结点，在<br>进队操作时， ( )。",
      "answerStr": "D",
      "options": [
        "仅修改队头指针",
        "仅修改队尾指针",
        "队头、队尾指针一定都会修改",
        "队头、队尾指针可能都会修改"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "设 n 个元素进栈序列是 1、2、3、…、n，其输出序列是 p1、p2、…、pn，若 p1=3，<br>则 p2 的值为 ( )。",
      "answerStr": "C",
      "options": [
        "一定是 2",
        "一定是 1",
        "不可能是 1",
        "以上都不对"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "在 （ ）中将会用到栈结构。",
      "answerStr": "D",
      "options": [
        "递归调用",
        "图深度优先遍历",
        "表达式求值",
        "以上场景都有"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "栈和队列的共同点是 （ ）。",
      "answerStr": "C",
      "options": [
        "都是先进后出",
        "都是后进先出",
        "只允许在端点处插入和删除元素",
        "没有共同点"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "最不适合用作链队的链表是（ ）。",
      "answerStr": "A",
      "options": [
        "只带头结点指针的非循环双链表",
        "只带队首结点指针的循环双链表",
        "只带队尾结点指针的循环双链表",
        "以上都不适合"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "设有 5 个元素进栈序列是 a、b、c、d、e，其输出序列是 c、e、d、b、a，则该栈的<br>容量至少是（ ）。",
      "answerStr": "D",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "将算术表达式“1+6/(8-5)3”转换成后缀表达式，在求后缀表达式的过程中，当遇到''时，<br>运算数栈（从栈顶到栈底次序）为（ ）。",
      "answerStr": "C",
      "options": [
        "8 6 1",
        "5 8 1",
        "3 2 1",
        "3 6 1"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "在数据处理过程中常需要保存一些中间数据，若某程序处理中先保存的数据先操作，<br>则使用( )来保存这些数据。",
      "answerStr": "B",
      "options": [
        "线性表",
        "队列",
        "栈",
        "单链表"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "一个循环队列中元素的排列顺序( )。",
      "answerStr": "C",
      "options": [
        "与队头和队尾指针的取值有关",
        "与元素值的大小有关",
        "由元素进队的先后顺序确定",
        "与存放队中元素的数组大小有关"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "设 n 个元素的进栈序列是 p1、p2、p3、…、pn，其输出序列是 1、2、3、…、n，若<br>pn=1，则 pi（1≤i≤n-1）的值是( ) 。",
      "answerStr": "A",
      "options": [
        "n-i+1",
        "n-i",
        "i",
        "有多种可能"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "若一个栈用数组 data[1..n]存储，初始栈顶指针 top 为 1，则以下元素 x 进栈的正确操<br>作是( )。",
      "answerStr": "B",
      "options": [
        "top+=1; data[top]=x",
        "data[top]=x; top+=1",
        "top-=1; data[top]=x",
        "data[top]=x; top-=1"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "若某循环队列有队头指针 front 和队尾指针 rear，在队不满时进队操作仅会改变( )。",
      "answerStr": "B",
      "options": [
        "front",
        "rear",
        "front 和 rear",
        "以上都不对"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "一个链队中，由 front 和 rear 分别指向队头和队尾结点，它不具有的功能是( )。",
      "answerStr": "B",
      "options": [
        "可以实现元素进队操作",
        "可以由队头指针和队尾指针直接求出队列中的元素个数",
        "可以实现元素出队操作",
        "可以由队头指针和队尾指针确定队列为空"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "若用一个大小为 6 的数组来实现循环队列，队头指针 front 指向队列中队头元素的前<br>一个位置，队尾指针 rear 指向队尾元素的位置。若当前 rear 和 front 的值分别为 0 和 3，<br>当从队列中删除一个元素，再加入两个元素后，rear 和 front 的值分别为 （ ）。",
      "answerStr": "B",
      "options": [
        "1 和 5",
        "2 和 4",
        "4 和 2",
        "5 和 1"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "若一个栈采用数组 s[0..n-1]存放其元素，初始时栈顶指针 top 为 n，则以下元素 x 进<br>栈的正确操作是（ ） 。",
      "answerStr": "C",
      "options": [
        "top+=1; s[top]=x;",
        "s[top]=x; top+=1",
        "top-=1; s[top]=x;",
        "s[top]=x; top-=1"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "设栈的输入序列是 1、2、3、4，则（ ）不可能是其出栈序列。",
      "answerStr": "C",
      "options": [
        "1、2、4、3",
        "2、1、3、4",
        "4、3、1、2",
        "3、2、1、4"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "设一个栈的输入序列是 1、2、3、4、5，则下列序列中，是栈的合法输出序列的是（ ）。",
      "answerStr": "D",
      "options": [
        "5、1、2、3、4",
        "4、5、1、3、2",
        "4、3、1、2、5",
        "3、2、1、5、4"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "给定一个足够大的空栈，有 4 个元素的进栈次序为 A、B、C、D，则以 C、D 开头<br>的出栈序列的个数为（ ）。",
      "answerStr": "A",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "若元素 a、b、c、d、e、f 依次进栈，允许进栈、退栈的操作交替进行，但不允许连续<br>3 次退栈工作，则不可能得到的出栈序列是（ ）。",
      "answerStr": "D",
      "options": [
        "dcebfa",
        "cbdaef",
        "bcaefd",
        "afedcb"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "设一个栈的输入序列为 A、B、C、D，则借助一个栈所得到的输出序列不可能是（ ）。",
      "answerStr": "D",
      "options": [
        "A,B,C,D",
        "D,C,B,A",
        "A,C,D,B",
        "D,A,B,C"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "对于栈操作数据的原则是（ ）。",
      "answerStr": "B",
      "options": [
        "先进先出",
        "后进先出",
        "后进后出",
        "不分顺序"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "栈的“先进后出”特性是指（ ）。",
      "answerStr": "A",
      "options": [
        "最后进栈的元素总是最先出栈",
        "当同时进行进栈和出栈操作时，总是进栈优先",
        "每当有出栈操作时，总要先进行一次进栈操作",
        "每次出栈的元素总是最先进栈的元素"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "给定一个空栈，若元素 10、20、23、13 依次进栈，然后有两个数出栈，又有 3 个数<br>进栈，第一次进栈的元素 23 现在（ ）。",
      "answerStr": "A",
      "options": [
        "已出栈",
        "从栈底算起第 3 个",
        "处于栈顶",
        "从栈底算起第 4 个"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "一个 n 阶的对称矩阵 A，如果采用以列优先（即以列序为主序）的压缩方式存放到一<br>个一维数组 B 中，则 B 的容量为( ) 。",
      "answerStr": "C",
      "options": [
        "n² B、n²/2",
        "n(n+1)/2",
        "(n+1)(n+2)/2"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "设二维数组 A[3][5]，每个数组元素占用 2 个存储单元，若按列优先顺序进行存储，<br>A[0][0]的存储地址为 100，则 A[2][3]的存储地址是（ ） 。",
      "answerStr": "A",
      "options": [
        "122",
        "126",
        "114",
        "116"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "矩阵 A[1..10，1..10]按行优先存储到一维数组 B[0..m]中，则 A[5][8]元素在 B 中的位<br>置 k 是 （ ） 。",
      "answerStr": "B",
      "options": [
        "10",
        "47",
        "45",
        "60"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "一个稀疏矩阵采用压缩后，和直接采用二维数组存储相比会失去（ ）特性。",
      "answerStr": "B",
      "options": [
        "顺序存储",
        "随机存取",
        "输入输出",
        "以上都不对"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "在 KMP 算法中，已经求出 next 数组。当模式串位 j 与目标串位 i 比较时，两字符不<br>相等，则 i 的位移方式是（ ） 。",
      "answerStr": "B",
      "options": [
        "i=next[j]",
        "i 不变",
        "j 不变",
        "j=next[j]"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "将 10 阶对称矩阵 A 压缩存储到一维数组 B 中，则数组 B 的长度最少为( )。",
      "answerStr": "D",
      "options": [
        "100",
        "40",
        "80",
        "55"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "设目标串为 s，模式串为 t，在 KMP 模式匹配中，next[4]=2 的含义是( )。",
      "answerStr": "A",
      "options": [
        "表示 t4 字符前面最多有 2 个字符和开头的 2 个字符相同",
        "表示 s4 字符前面最多有 2 个字符和开头的 2 个字符相同",
        "表示目标串匹配失败的位置是 i=4",
        "表示模式串匹配失败的位置是 j=2"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "若串 str=\"Software\"，其子串的数目是（ ）。",
      "answerStr": "D",
      "options": [
        "8",
        "9",
        "36",
        "37"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "串的长度是指（ ）。",
      "answerStr": "B",
      "options": [
        "串中所含不同字母的个数",
        "串中所含字符的个数",
        "串中所含不同字符的个数",
        "串中所含非空格字符的个数"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "串是一种特殊的线性表，其特殊性体现在（ ）。",
      "answerStr": "B",
      "options": [
        "可以顺序存储",
        "数据元素是单个字符",
        "可以链接存储",
        "数据元素可以是多个字符"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "关于串的叙述，正确的是（ ）。",
      "answerStr": "D",
      "options": [
        "串是含有一个或多个字符的有穷序列",
        "空串是只含有空格字符的串",
        "空串是含有零个字符或含有空格字符的串",
        "串是含有零个或多个字符的有穷序列"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "下面关于串的叙述中，正确的是（ ）。",
      "answerStr": "A",
      "options": [
        "串是一种特殊的线性表",
        "串中元素只能是字母",
        "空串就是空白串",
        "串的长度必须大于零"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "关于串的的叙述，不正确的是（ ）。",
      "answerStr": "B",
      "options": [
        "串是字符的有限序列",
        "空串是由空格构成的串",
        "替换是串的一种重要运算",
        "串既可以采用顺序存储，也可以采用链式存储"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "两个字符串相等的条件是（ ） 。",
      "answerStr": "D",
      "options": [
        "串的长度相等",
        "含有相同的字符集",
        "都是非空串",
        "串的长度相等且对应的字符相同"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "一个递归定义可以用递归算法求解，也可以用非递归算法求解。但单从执行时间来看，<br>通常递归算法比非递归算法（ ）。",
      "answerStr": "B",
      "options": [
        "较快",
        "较慢",
        "相同",
        "无法比较"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "以下关于递归的叙述中错误的是（ ）。",
      "answerStr": "A",
      "options": [
        "一般而言，使用递归解决问题较使用循环解决问题需要定义更多的变量",
        "递归算法的执行效率相对较低",
        "递归算法的执行需要用到栈",
        "以上都是错误的"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "将递归算法转换成非递归算法时，通常要借助的数据结构是（ ）。",
      "answerStr": "B",
      "options": [
        "线性表",
        "栈",
        "队列",
        "树"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "函数 f(x,y)定义如下：当 n>1 时， f(n)=f(n-1)+f(n-2)+1，否则 f(n)=1 ，则 f(5)的值是<br>（ ） 。",
      "answerStr": "B",
      "options": [
        "10",
        "15",
        "16",
        "20"
      ],
      "answer": "B"
    },
    {
      "type": "choice",
      "question": "递归模型为 f(1)=1，f(n)=f(n-1)+n（n>1），其中递归体是（ ） 。",
      "answerStr": "C",
      "options": [
        "f(1)=0",
        "f(0)=1",
        "f(n)=f(n-1)+n",
        "f(n)=n"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "正确的递归算法应包含（ ）。",
      "answerStr": "C",
      "options": [
        "递归出口",
        "递归体",
        "递归出口和递归体",
        "以上都不包含"
      ],
      "answer": "C"
    },
    {
      "type": "choice",
      "question": "函数 f(x,y)定义如下：当 x>0 且 y>0 时， f(x,y)=f(x-1,y)+f(x,y-1) ，否则 f(x,y)=x+y，<br>则 f(2,1)的值是（ ）。",
      "answerStr": "D",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "D"
    },
    {
      "type": "choice",
      "question": "在计算机内实现递归算法时所需的辅助数据结构是（ ）。",
      "answerStr": "A",
      "options": [
        "栈",
        "队列",
        "树",
        "图"
      ],
      "answer": "A"
    },
    {
      "type": "choice",
      "question": "递归模型为 f(1)=1，f(n)=f(n-1)+n（n>1），其中递归出口是（ ）。",
      "answerStr": "B",
      "options": [
        "f(1)=0",
        "f(1)=1",
        "f(0)=1",
        "f(n)=n"
      ],
      "answer": "B"
    }
  ],
  "judge": [
    {
      "type": "judge",
      "question": "一种逻辑结构的数据只有一种对应的存储结构。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "数据的逻辑结构与各数据元素在计算机中如何存储有关。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "非线性结构中，每个元素最多只有一个前趋元素。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "任何数据结构都具备 3 个基本运算：插入、删除和查找。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "一个数据结构中，如果数据元素值发生改变，则它的逻辑结构也随之改变。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "数据的运算描述是定义在数据的逻辑结构上的。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "数据运算的实现是基于数据的逻辑结构的。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "数据的运算就是指基本运算，只能对数据实施基本运算。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "数据对象就是一组任意数据元素的集合。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "数据的逻辑结构是指数据的各数据项之间的逻辑关系。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "线性表的逻辑顺序总与其物理顺序一致。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "线性表的顺序存储结构优于链式存储结构。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "顺序表具有随机存取特性，而链表不具有随机存取特性。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "线性表中每个元素都有一个前趋元素和一个后继元素。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "线性表的长度是线性表占用的存储空间的大小。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "线性表的存储结构大小与线性表中元素类型有关。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "线性表中的结点按前趋、后继关系可以排成一个线性序列。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "空的线性表就是所有元素尚未赋值的线性表。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "在一个含有 n（n≥1）个元素的线性表中，所有元素值不能相同。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "线性表中所有元素的数据类型必须相同。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "顺序队采用数组存放队中元素，数组具有随机存取特性，所以顺序队中可以随机存取<br>元素。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "顺序队中有多少元素，可以根据队头指针和队尾指针的值来计算。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "在队空间大小为 n 的非循环队列中，最多只能进行 n 次进队操作。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "在队空间大小为 n 的循环队列中，最多只能进行 n 次进队操作。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "队列是一种对进队、出队操作的次序做了限制的线性表。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "队列是一种对进队、出队操作的次数做了限制的线性表。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "n 个元素进队的顺序和出队的顺序总是一致的。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "n 个元素通过一个队列，其出队序列是唯一的。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "栈和队列都是限制存取端的线性表。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "栈在算法设计中用于保存临时数据，这些数据具有先进后出的特点，如果某算法中只<br>产生一个临时数据，那么用栈或队列都可以。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "有 n 个不同的元素通过一个栈，产生的所有出栈序列恰好构成这 n 个元素的全排列。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "相同的 n 个元素的不同序列通过一个栈一定不会得到相同的出栈序列。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "空栈是指栈中元素没有赋值。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "栈是一种特殊的线性表，线性表的所有运算都可以施加在栈上。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "栈和线性表是两种不同的数据结构，它们的数据元素的逻辑关系也不同。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "栈和队列都是线性表，只是在插入和删除时受到了一些限制。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "栈具有先进后出的特点，其中数据的逻辑结构是任意的。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "栈的定义不涉及数据的逻辑结构。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "栈是一种特殊的线性表，其特殊之处在于栈的存储结构比较特殊。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "通常递归的算法简单、易懂、容易编写，而且执行的效率也高。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "尾递归算法可以通过循环转换成非递归算法。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "任何递归算法都必须使用栈转换成非递归算法。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "递归算法转换为非递归算法时，通常借助于队列来实现。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "任何递归算法都必须包含递归出口部分。",
      "answerStr": "T",
      "options": [],
      "answer": true
    },
    {
      "type": "judge",
      "question": "一个递归算法可以没有递归体，但必须包含递归出口部分。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "任何递归算法都是尾递归。",
      "answerStr": "F",
      "options": [],
      "answer": false
    },
    {
      "type": "judge",
      "question": "调用自身的函数称为递归函数。",
      "answerStr": "T",
      "options": [],
      "answer": true
    }
  ],
  "multiple": [],
  "design": [],
  "comprehensive": [
    {
      "type": "comprehensive",
      "question": "什么是数据结构？有关数据结构的讨论涉及哪三个方面？",
      "answerStr": "",
      "options": [],
      "answer": "按某种逻辑关系组织起来的一组数据元素，按一定的存储方式存储于计算机中，并在其上<br>定义了一个运算的集合，称为一个数据结构。<br>数据结构涉及以下三个方面的内容：<br>①数据成员以及它们相互之间的逻辑关系，也称为数据的逻辑结构。<br>②数据元素及其关系在计算机存储器内的存储表示，也称为数据的物理结构，简称为存储<br>结构。<br>③施加于该数据结构上的操作即运算。"
    },
    {
      "type": "comprehensive",
      "question": "什么是算法？算法的 5 个特性是什么？",
      "answerStr": "",
      "options": [],
      "answer": "通常算法定义为解决某一特定任务而规定的一个指令序列。一个算法应当具有以下特性：<br>①有穷性。<br>②确定性。<br>③可行性。<br>④输入。<br>⑤输出。"
    },
    {
      "type": "comprehensive",
      "question": "当为解决某一问题而选择数据结构时，应从哪些方面考虑？",
      "answerStr": "",
      "options": [],
      "answer": "通常从两方面考虑：第一是算法所需的存储空间量；第二是算法所需的时间。对算法所需<br>的时间又涉及以下几点：<br>程序运行时所需输入的数据总量。<br>计算机执行每条指令所需的时间。<br>程序中指令重复执行的次数。"
    },
    {
      "type": "comprehensive",
      "question": "数据的逻辑结构分为线性结构和非线性结构两大类。线性结构包括线性表、队列和栈",
      "answerStr": "",
      "options": [],
      "answer": "等。非线性结构包括树形结构和图等、这两类结构各自的特点是什么？<br>线性结构的特点是：在结构中所有数据元素都处于一个序列中，有且仅有一个开始元素和<br>一个终端元素，并且所有数据元素都最多有一个前驱和一个后继。例如，线性表等就是典<br>型的线性结构<br>非线性结构的特点是：一个数据元素可能有零个、一个或多个前驱和后继。例如，树、图<br>等都是典型的非线性结构。"
    },
    {
      "type": "comprehensive",
      "question": "简述数据结构中运算描述和运算实现的异同。",
      "answerStr": "",
      "options": [],
      "answer": "运算描述是指逻辑结构施加的操作，而运算实现是指一个完成该运算功能的算法。它们的<br>相同点是，运算描述和运算实现都能完成对数据的“处理”或某种特定的操作。不同点是，<br>运算描述只是描述处理功能，不包括处理步骤和方法，而运算实现的核心则是处理步骤。"
    },
    {
      "type": "comprehensive",
      "question": "什么是存储实现？什么是运算实现？",
      "answerStr": "",
      "options": [],
      "answer": "存储实现就是设计数据的存储结构，是建立数据的机内表示，包括两个部分：数据元素和<br>数据元素之间关系的存储。在某种存储实现的基础上各种运算的具体实现称为运算实现，<br>运算实现的核心是设计实现某一运算的处理步骤，即算法设计。"
    },
    {
      "type": "comprehensive",
      "question": "设数据的逻辑结构如下： B2=(D,R) D={1,2,3,4,5,6} R={r}",
      "answerStr": "",
      "options": [],
      "answer": "r={<1,2>,<2,4>,<1,3>,<3,4>,<3,5> ,<3,6>,<5,6>} 说明是何种数据结构。<br>其中每个结点都零个或多个前趋结点，每个结点都零个或多个后继结点，所以它是一种图<br>形结构。"
    },
    {
      "type": "comprehensive",
      "question": "设有采用二元组表示的数据逻辑结构为 S=(D,R)，其中 D={a,b,…,i}，R={r}，",
      "answerStr": "",
      "options": [],
      "answer": "r={(a,b),(a,c),(c,d),(c,f),(f,h),(d,e),(f,g),(h,i)}，问相对于关系 R，哪些结点是开始结点，哪些<br>结点是终端结点？<br>该逻辑结构为树形结构，其中 a 结点没有前趋结点，称为根结点，b、e、g、i 结点没有后<br>继结点，它们都是终端结点。"
    },
    {
      "type": "comprehensive",
      "question": "简述数据与数据元素的关系与区别。",
      "answerStr": "",
      "options": [],
      "answer": "凡是能被计算机存储、加工的对象统称为数据，数据是一个集合。数据元素是数据的基本<br>单位，是数据的个体。数据元素与数据之间的关系是元素与集合之间的关系。"
    },
    {
      "type": "comprehensive",
      "question": "若频繁地对一个线性表进行插入和删除操作，该线性表宜采用何种存储结构，为什",
      "answerStr": "",
      "options": [],
      "answer": "么？<br>宜采用链式存储结构。因为采用链式结构存储线性表，在插入和删除操作时只修改相关结<br>点的指针域，不需要移动结点；而采用顺序结构存储线性表，插入和删除操作需要平均移<br>动表中的一半元素。修改指针域操作比移动元素操作花费的时间少得多。"
    },
    {
      "type": "comprehensive",
      "question": "要想在 O(1)的时间内存取第 i 个表元素，线性表采用顺序表还是单链表？",
      "answerStr": "",
      "options": [],
      "answer": "采用顺序表，因为顺序表具有随机存取特性，而单链表不具有随机存取特性，在单链表中<br>存取第 i 个表元素的时间为 O(n)。"
    },
    {
      "type": "comprehensive",
      "question": "简述顺序表和链表存储方式的主要优缺点。",
      "answerStr": "",
      "options": [],
      "answer": "顺序表的优点是可以随机存取元素，存储密度高，结构简单；缺点是需要一片地址连续的<br>存储空间，不便于插入和删除元素（需要移动大量的元素），表的容量不便扩充。<br>链表的优点是便于结点的插入和删除（只需要修改指针域，不需要移动结点），表的容量扩<br>充十分方便；缺点是不能进行随机访问，只能顺序访问，另外每个结点上增加指针域，导<br>致存储密度较低。"
    },
    {
      "type": "comprehensive",
      "question": "线性表有何特点，线性表中的元素可以重复出现吗？",
      "answerStr": "",
      "options": [],
      "answer": "线性表是有限个相同性质的元素的序列，数据元素呈现线性关系，每个元素至多只有一个<br>前趋元素和一个后继元素。<br>由于线性表中元素与其位置有关，所以线性表中的元素可以重复出现。"
    },
    {
      "type": "comprehensive",
      "question": "什么叫做随机存取特性？",
      "answerStr": "",
      "options": [],
      "answer": "随机存取特性是针对存储结构的，而不是针对逻辑结构的。<br>一种存储结构具有随机存取特性，是指对于给定元素序号 i，在时间 O(1)内能够找到该元<br>素的值，顺序表具有随机存取特性。"
    },
    {
      "type": "comprehensive",
      "question": "何谓队列的“假溢出”现象？给出一种较好的解决方法？",
      "answerStr": "",
      "options": [],
      "answer": "队列的“假溢出”现象是指用数组实现的顺序队中，队尾指针已达到数组的下标上界产生上<br>溢出，而队头指针之前还有若干空闲位置的现象。<br>一种较好的解决方法是利用循环队列技术使数组空间首尾相连，这种情况下，进队和出队<br>运算的时间复杂度为 O(1)。"
    },
    {
      "type": "comprehensive",
      "question": "队列具有先进先出的特性，可不可以在队列的中间位置插入和删除元素？为什么？",
      "answerStr": "",
      "options": [],
      "answer": "不可以，队列是限制了存取位置的，只能在一端插入元素，另一端删除元素。<br>如果允许在队列的中间位置插入和删除元素，它就成为普通的线性表了，不再具有先进先<br>出的特性。"
    },
    {
      "type": "comprehensive",
      "question": "以 1、2、3、…、n 的顺序进队，可以的出队序列有多少？",
      "answerStr": "",
      "options": [],
      "answer": "可能的出队序列只有一种，即 1、2、3、…、n。各元素的出队顺序与进队顺序相同。"
    },
    {
      "type": "comprehensive",
      "question": "顺序队列采用数组存放队中元素，那么顺序队等同于数组吗？",
      "answerStr": "",
      "options": [],
      "answer": "顺序队尽管采用数组存放队中元素，但两者不等同。顺序队是队列的一种存储结构，体现<br>队列的特性，只能在一端插入元素，另一端删除元素，而数组没有这种限制，可以在任意<br>位置上插入和删除元素。"
    },
    {
      "type": "comprehensive",
      "question": "栈和队列都是运算受到限制的特殊的线性表，栈和队列有何不同？",
      "answerStr": "",
      "options": [],
      "answer": "栈是仅允许在一端进行插入和删除的线性表，又称为后进先出表；队列是允许在一端插入，<br>在另一端删除的线性表，允许插入的一端称为队尾，允许删除的一端称为队头，又称为先<br>进先出表。"
    },
    {
      "type": "comprehensive",
      "question": "队列是一种先进先出的顺序存取结构，它指的是顺序存储结构吗？",
      "answerStr": "",
      "options": [],
      "answer": "顺序存取和顺序存储是两个不同的概念。顺序存取是指只能逐个存或逐个取结构中的元素，<br>队列只能在队尾存、在队头取。而顺序存储是指利用一个连续的空间相继存放结构中的元<br>素，例如队列可以基于数组存放队中元素，称为顺序队。"
    },
    {
      "type": "comprehensive",
      "question": "什么是递归，递归有哪些形式？",
      "answerStr": "",
      "options": [],
      "answer": "在定义一个函数时出现调用本函数的成分，称为递归。递归分为直接递归和间接递归两种<br>形式。<br>直接递归是指函数在执行过程中调用本身。间接递归是指函数在执行过程中调用其它函数，<br>再经过这些函数调用本身。"
    },
    {
      "type": "comprehensive",
      "question": "简述递归的特点。",
      "answerStr": "",
      "options": [],
      "answer": "递归的特点是它既有递推过程，又有求值（回归）过程，而且在任何一个深度时，它的所<br>有变量和参数的值都保存着，同一变量或参数在不同深度的值，都压入系统栈中。"
    },
    {
      "type": "comprehensive",
      "question": "简述递归算法的优缺点。",
      "answerStr": "",
      "options": [],
      "answer": "递归算法优点是结构清晰，可读性强，而且容易用数学归纳法来证明算法的正确性，因此<br>它为设计算法、调试程序带来很大方便。<br>递归算法的缺点是算法的运行效率较低，无论是耗费的计算时间还是占用的存储空间都比<br>非递归算法要多。"
    }
  ]
};