import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface Course {
  id: number;
  title: string;
  category: string;
  learners: number;
  sessions: number;
  description: string;
  image: string;
  rating: number;
}

export const useCourseStore = defineStore("course", () => {
  const courses = ref<Course[]>([]);
  const selectedCourse = ref<Course | null>(null);
  const loading = ref(true); // Set initial state to true
  const error = ref<string | null>(null);

  const fetchCourses = async () => {
    error.value = null;

    try {
      // Simulate a very short delay to ensure the loading state is reflected immediately
      await new Promise((resolve) => setTimeout(resolve, 0)); // SetTimeout with 0ms delay

      // Now simulate the API call with a more realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Assign fetched courses (simulated here)
      courses.value = [
        {
          id: 1,
          title: "Learn SQL",
          category: "Subjects",
          learners: 205,
          sessions: 11,
          description:
            "This SQL course is essential for computer science students and job seekers, as SQL is fundamental for managing and manipulating databases.",
          image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          rating: 4,
        },
        {
          id: 2,
          title: "Git Hub",
          category: "Software Tools",
          learners: 77,
          sessions: 4,
          description:
            "This course on GIT, or Global Information Tracker, is a comprehensive exploration of version control systems, essential for software development.",
          image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          rating: 4,
        },
        {
          id: 3,
          title: "Pseudo Code",
          category: "Subjects",
          learners: 25,
          sessions: 3,
          description:
            "The Pseudocode course hones skills for coding challenges in aptitude exams and technical interviews, providing a foundation for algorithm development.",
          image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          rating: 4,
        },
        {
          id: 4,
          title: "Python Programming",
          category: "Programming Languages",
          learners: 300,
          sessions: 15,
          description:
            "This Python Programming course covers basic to advanced concepts, making it perfect for beginners and experienced programmers alike.",
          image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          rating: 5,
        },
        {
          id: 5,
          title: "Web Development",
          category: "Web Technologies",
          learners: 150,
          sessions: 10,
          description:
            "The Web Development course teaches HTML, CSS, and JavaScript, equipping learners with the skills to build and maintain websites.",
          image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          rating: 5,
        },
        {
          id: 6,
          title: "Machine Learning",
          category: "Data Science",
          learners: 120,
          sessions: 8,
          description:
            "This Machine Learning course introduces fundamental concepts and techniques, including supervised and unsupervised learning, with hands-on projects.",
          image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          rating: 4.5,
        },
        {
          id: 7,
          title: "Cyber Security",
          category: "Security",
          learners: 85,
          sessions: 7,
          description:
            "The Cyber Security course provides knowledge on protecting systems and networks from digital attacks, essential for IT professionals.",
          image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          rating: 4.5,
        },
      ];

      selectedCourse.value = courses.value[0]; // Select the first course by default
    } catch (err) {
      error.value = "Failed to load courses. Please try again.";
    } finally {
      loading.value = false;
    }
  };

  const selectCourse = (course: Course) => {
    selectedCourse.value = course;
  };

  const filteredCourses = computed(() => {
    return courses.value;
  });

  return {
    courses,
    selectedCourse,
    selectCourse,
    filteredCourses,
    loading,
    error,
    fetchCourses,
  };
});
