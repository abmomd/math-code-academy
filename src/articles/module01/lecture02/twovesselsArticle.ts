
const grasshopperArticle = {
    title: "Two Vessels",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
   6
   3 7 2
   17 4 3
   17 17 1
   17 21 100
   1 100 1
   97 4 3


 

  Output:
   1
   3
   0
   1
   50
   16



    `,
    approaches: [
      {
        name: "Solution",
        description: `
Let d=a−b
, the difference in masses of water in the vessels. Our goal is to make d
 equal to 0
. Note that with one pouring, we can add any number from the range [−2⋅c;2⋅c]
 to d
. Therefore, the answer to the problem will be ⌈|d|/2⋅c⌉
.`,
       
codeSnippets: {
          cpp: `#include<bits/stdc++.h>
using namespace std;


int solve(int a, int b, int c)
{
    if(a == b)
    return 0;
    int mini = min(a, b);
    int maxi = max(a, b);
    double d = maxi - mini;
    if(d <= c)
    return 1;
    double part = d/2;
    double ans = part/c;
    if(ans == (int)ans)
    return ans;
    return ans+1;
}

int main()
{
    
    int t;
    cin>>t;
    while(t--)
    {
        int a, b, c;
        cin>>a>>b>>c;
        cout<<solve(a, b, c)<<endl;
    }
    return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {

    public static int solve(int a, int b, int c) {
        if (a == b) {
            return 0;
        }
        int mini = Math.min(a, b);
        int maxi = Math.max(a, b);
        double d = maxi - mini;
        if (d <= c) {
            return 1;
        }
        double part = d / 2;
        double ans = part / c;
        if (ans == (int) ans) {
            return (int) ans;
        }
        return (int) Math.ceil(ans);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();
            System.out.println(solve(a, b, c));
        }
        sc.close();
    }
}



`,
          python: `import math

def solve(a, b, c):
    if a == b:
        return 0
    mini = min(a, b)
    maxi = max(a, b)
    d = maxi - mini
    if d <= c:
        return 1
    part = d / 2
    ans = part / c
    if ans == int(ans):
        return int(ans)
    return math.ceil(ans)

def main():
    t = int(input())
    for _ in range(t):
        a, b, c = map(int, input().split())
        print(solve(a, b, c))

if __name__ == "__main__":
    main()


`,
        },
        timeComplexity: `The overall time complexity of the program is O(t), where t is the number of test cases, as the solve function is executed once per test case.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  