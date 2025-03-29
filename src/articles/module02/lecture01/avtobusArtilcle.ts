
const grasshopperArticle = {
    title: "AvtoBus",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    4
    4
    7
    24
    998244353998244352



  Output:
   1 1
  -1
   4 6
   166374058999707392 249561088499561088

    `,
    approaches: [
      {
        name: "Solution",
        description: `Let the number of buses with two axles is x
 and the number of buses with three axles is y
. Then the equality 4x+6y=n
 must be true. If n
 is odd, there is no answer, because the left part of the equality is always even. Now we can divide each part of the equality by two: 2x+3y=n2
.

Let's maximize the number of buses. Then we should make x
 as large as possible. So, we will get 2+…+2+2=n2
 if n2
 is even, and 2+…+2+3=n2
 otherwise. In both cases the number of buses is ⌊n2⌋
.

Now let's minimize the number of buses. So, we should make y
 as large is possible. We will get 3+…+3+3+3=n2
 if n2
 is divisible by 3
, 3+…+3+3+2=n2
 if n≡2(mod3)
, and 3+…+3+2+2=n2
 if n≡1(mod3)
. In all cases the number of buses is ⌈n3⌉
.

Also don't forget the case n=2
 — each bus has at least four wheels, so in this case there is no answer.
 `,
        codeSnippets: {
          cpp: `#include<bits/stdc++.h>
using namespace std;
int main()
{
    optimize();
    int t;
    cin>>t;
    while(t--)
    {
        long long n,mn,mx;
        cin>>n;
        if(n%2==1 || n<4) cout<<-1<<endl;
        else
        {
            mn = n/6;
            if(n%6!=0) mn++;
            
            mx = n/4;

            cout<<mn<<" "<<mx<<endl;
        }

        
    }
    return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int t = scanner.nextInt();
        while (t-- > 0) {
            long n;
            n = scanner.nextLong();
            
            if (n % 2 == 1 || n < 4) {
                System.out.println(-1);
            } else {
                long mn = n / 6;
                if (n % 6 != 0) mn++;
                
                long mx = n / 4;

                System.out.println(mn + " " + mx);
            }
        }
        
        scanner.close();
    }
}


`,
          python: `def main():
    t = int(input())
    for _ in range(t):
        n = int(input())
        
        if n % 2 == 1 or n < 4:
            print(-1)
        else:
            mn = n // 6
            if n % 6 != 0:
                mn += 1
            
            mx = n // 4
            
            print(mn, mx)



`,
        },
        timeComplexity: `The time complexity of the given C++ code is O(t), where t is the number of test cases. Each test case involves constant-time operations like modulus and division, resulting in O(1) complexity per test case. Thus, the total complexity scales linearly with the number of test cases.
`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  