
import java.util.ArrayList;
import java.util.Scanner;

class Course {
    private int courseId;
    private String courseName;
    private String courseAdmin;
    private int quiz;
    private int handson;

    public Course(int courseId, String courseName, String courseAdmin, int quiz, int handson) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseAdmin = courseAdmin;
        this.quiz = quiz;
        this.handson = handson;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseAdmin() {
        return courseAdmin;
    }

    public void setCourseAdmin(String courseAdmin) {
        this.courseAdmin = courseAdmin;
    }

    public int getQuiz() {
        return quiz;
    }

    public void setQuiz(int quiz) {
        this.quiz = quiz;
    }

    public int getHandson() {
        return handson;
    }

    public void setHandson(int handson) {
        this.handson = handson;
    }
}
public class sol {

    static double findAvgOfQuizByAdmin(Course[] courses, String admin) {
        int totalQuiz = 0;
        int count = 0;

        for (Course course : courses) {
            if (course.getCourseAdmin().equalsIgnoreCase(admin)) {
                totalQuiz += course.getQuiz();
                count++;
            }
        }

        if (count > 0) {
            return (double) totalQuiz / count;
        } else {
            return 0; // or throw an exception if no courses found for the admin
        }
    }

    static Course[] sortCourseByHandsOn(Course[] courses, int handsonLimit) {
        ArrayList<Course> filteredCourses = new ArrayList<>();

        for (Course course : courses) {
            if (course.getHandson() < handsonLimit) {
                filteredCourses.add(course);
            }
        }

        if (filteredCourses.isEmpty()) {
            return null;
        }

        Course[] result = new Course[filteredCourses.size()];
        return filteredCourses.toArray(result);
    }

    public static void main(String[] args) {
        Course[] courses = new Course[4];
        
        //take user input for courses 
        Scanner scanner = new java.util.Scanner(System.in);
        for (int i = 0; i < 4; i++) {
            System.out.println("Enter details for course " + (i + 1) + ":");
            int courseId = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            String courseName = scanner.nextLine();
            String courseAdmin = scanner.nextLine();
            int quiz = scanner.nextInt();
            int handson = scanner.nextInt();
            courses[i] = new Course(courseId, courseName, courseAdmin, quiz, handson);
        }

        scanner.close();

        String adminToSearch = "Alice";
        double avgQuiz = findAvgOfQuizByAdmin(courses, adminToSearch);
        System.out.println("Average Quiz for admin " + adminToSearch + ": " + avgQuiz);

        int handsonLimit = 6;
        Course[] sortedCourses = sortCourseByHandsOn(courses, handsonLimit);
        if (sortedCourses != null) {
            System.out.println("Courses with hands-on less than " + handsonLimit + ":");
            for (Course course : sortedCourses) {
                System.out.println(course.getCourseName());
            }
        } else {
            System.out.println("No courses found with hands-on less than " + handsonLimit);
        }
    }

}
