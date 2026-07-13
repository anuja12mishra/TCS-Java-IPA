import java.util.*;
class Associate {
    Integer id;
    String name;
    String technology;
    Integer experienceInYears;


    Associate(Integer id,String name,String 
    technology, Integer experienceInYears){
            this.id = id;
            this.name=name;
            this.technology =technology;
            this.experienceInYears=experienceInYears;
    }
    public String getTech(){
        return this.technology;
    }
    public Integer getId(){
        return this.id;
    }
    public Integer getExp(){
        return this.experienceInYears;
    }
    public String getName(){
        return this.name;
    }
}

class Main{
    public static List<Associate> associatesForGivenTechnology (List<Associate> as,String searchTechnology){

            List<Associate> ans = new ArrayList<>();

            for(Associate asin : as){
                if((asin.getTech().equalsIgnoreCase(searchTechnology)) && (asin.getExp()%5==0)){
                    ans.add(asin);
                }
            }

            return ans.size()>0?ans:null;
    }
    public static void main(String arg[]){
        List<Associate> as = new ArrayList<>();
        // Integer id;
        // String name;
        // String technology;
        // Integer experienceInYears;
        Scanner sc = new Scanner(System.in);
       for(int i=0;i<5;i++){
            String id = sc.nextLine().trim();
            String name = sc.nextLine().trim();
            String technology = sc.nextLine().trim();
            String experienceInYears = sc.nextLine().trim();
        

            as.add(new Associate(Integer.valueOf(id),name,technology,Integer.valueOf(experienceInYears)));
        }
        String searchTechnology = sc.nextLine().trim();


        System.out.println("output for string matching"+searchTechnology);
        List<Associate> ans =  associatesForGivenTechnology(as,searchTechnology);

        if(ans == null){
            System.out.println("No string matched");
            return;
        }
        for(Associate a:ans){
            System.out.println("id: "+a.getId()+" name: "+a.getName()+" tech: "+a.getTech()+" Exp: "+a.getExp());
        }
    }
}