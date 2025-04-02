
const grasshopperArticle = {
    title: "Drinks",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    3
    50 50 100
    4
    0 25 50 75


  Output:
    66.666666666667
    37.500000000000


    `,
    approaches: [
      {
        name: "Solution",
        description: `
You need to calculate the average percentage of orange juice in a cocktail by summing the percentages of orange juice in each drink and dividing by the total number of drinks. 
`,
       
codeSnippets: {
          cpp: `#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,a[110];
    cin>>n;
    double ans=0.0,sum=0.0;
    for(int i=0; i<n; i++)
    {
        cin>>a[i];
        sum+=a[i];
    }
    ans=sum/n;
    cout<<fixed<<setprecision(12)<<ans<<endl;

    return 0;
}
`,
          java: `import java.util.Scanner;

public class AverageCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        double[] a = new double[110];
        double sum = 0.0;
        
        for (int i = 0; i < n; i++) {
            a[i] = scanner.nextDouble();
            sum += a[i];
        }
        
        double ans = sum / n;
        System.out.printf("%.12f%n", ans);
        
        scanner.close();
    }
}



`,
          python: `def main():
    n = int(input())
    a = [0] * 110
    sum = 0.0
    
    for i in range(n):
        a[i] = float(input())
        sum += a[i]
    
    ans = sum / n
    print(f"{ans:.12f}")


`,
        },
        timeComplexity: `The time complexity of the given C++ code is O(n) because the for loop iterates n times, performing constant-time operations (reading input and summing values) in each iteration.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  