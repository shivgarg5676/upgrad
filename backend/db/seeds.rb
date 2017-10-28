# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
student1 = User.where(:name => "shiv garg", :user_type => "student",:email=> "shivgarg5676@hotmail.com").first_or_create();
teacher1 = User.where(:name => "mohit garg", :user_type => "teacher",:email=> "mohitgarg5676@hotmail.com").first_or_create();
question_type_1  = QuestionType.where(:name => 'MCQ').first_or_create()
question_type_2 = QuestionType.where(:name => "Paragraph").first_or_create()
question_type_3 = QuestionType.where(:name => "Submission").first_or_create()


question1 = Question.where(:title=>"Create external table with partitioning and add data to it",:description => "Why is there no airplanes visible in google map satellite view", :question_type => question_type_3).first_or_create()
question2 = Question.where(:title=>"Buying House",:description => "Do you regret buying property in Banglore. if yes, why", :question_type => question_type_2).first_or_create()
