
const grasshopperArticle = {
    title: "Turtle Math: Fast Three Task",
    content: "Pairs are used to store two values together...",
    example: `
  Input: 
    8
    4
    2 2 5 4
    3
    1 3 2
    4
    3 7 6 8
    1
    1
    4
    2 2 4 2 
    2
    5 5
    7
    2 4 8 1 9 3 4
    2
    4 10


 Output:
    1
    0
    0
    1
    1
    2
    1
    1 `,
    approaches: [
      {
        name: "Solution",
        description: `Let's denote the sum of elements as s
. If s is already divisible by 3
, then the answer is 0
.

The answer is 1
 in the following cases:

If smod3=2
, then we can add 1
 to any element to make the sum divisible by 3
;
If there exists an ai
 such that smod3=aimod3
, then we can remove such ai
 to make the sum divisible by 3
.
Otherwise, if smod3=1
, we cannot achieve the required sum in one operation. We can increase any element twice, then the sum will increase by 2
 and become divisible by  3`,

        codeSnippets: {
          cpp: `#include <iostream>
using namespace std;

int main(){
    int t;
    cin>>t;
    while(t--){
        int k;
        cin>>k;
        int ACC=0;
        bool hv=false;
        for(int i=0;i<k;i++){
            int x;
            cin>>x;
            ACC+=x;
	    if(x%3==1){
		hv=true;
	    }
        }
        if(ACC%3==0){
            cout<<0<<endl;
        }else if(ACC%3==2){
            cout<<1<<endl;
        }else{
            if(hv==true){
                cout<<1<<endl;
            }else{
                cout<<2<<endl;
            }
        }
    }
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();

        while (t-- > 0) {
            int k = scanner.nextInt();
            int ACC = 0;
            boolean hasRemainderOne = false;

            for (int i = 0; i < k; i++) {
                int x = scanner.nextInt();
                ACC += x;
                if (x % 3 == 1) {
                    hasRemainderOne = true;
                }
            }

            int remainder = ACC % 3;
            if (remainder == 0) {
                System.out.println(0);
            } else {
                System.out.println(hasRemainderOne ? 1 : 2);
            }
        }

        scanner.close();
    }
}

`,
          python: `
 t = int(input())
    
    for _ in range(t):
        k = int(input())
        ACC = 0
        has_remainder_one = False
        
        for _ in range(k):
            x = int(input())
            ACC += x
            if x % 3 == 1:
                has_remainder_one = True
        
        remainder = ACC % 3
        if remainder == 0:
            print(0)
        else:
            print(1 if has_remainder_one else 2)`,
        },
        timeComplexity: `The time complexity of the provided code is O(t * k), where 
t
t is the number of test cases and 
k
k is the number of integers in each test case. This is because the outer loop runs 
t
t times, and for each test case, the inner loop processes 
k
k integers.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  