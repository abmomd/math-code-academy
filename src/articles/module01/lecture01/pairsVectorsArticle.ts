
const pairsVectorsArticle = {
    title: "Using Pairs in C++ STL",
    content: "Pairs are used to store two values together...",
    example: "In this example, we create a pair of an integer and a string...",
    approaches: [
      {
        name: "Approach 1: Basic Usage of Pairs",
        description: "We use the pair<T1, T2> template to create a pair...",
        codeSnippets: {
          cpp: `#include <iostream>
  using namespace std;
  int main() {
      pair<int, string> p = {1, "Hello"};
      cout << p.first << " " << p.second;
  }`,
          java: `// Java Code for Approach 1`,
          python: `# Python Code for Approach 1`,
        },
        timeComplexity: "O(1)",
      },
      {
        name: "Approach 2: Pair Inside a Vector",
        description: "We can store pairs inside a vector to create key-value relationships...",
        codeSnippets: {
          cpp: `#include <iostream>
  #include <vector>
  using namespace std;
  int main() {
      vector<pair<int, string>> v = {{1, "Alice"}, {2, "Bob"}};
      for (auto p : v) cout << p.first << " " << p.second << endl;
  }`,
          java: `// Java Code for Approach 2`,
          python: `# Python Code for Approach 2`,
        },
        timeComplexity: "O(N)",
      },
    ],
  };
  
  export default pairsVectorsArticle;
  