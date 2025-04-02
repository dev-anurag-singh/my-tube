// TODO: CREATE SEED FILE FOR CATEGORIES
import { db } from '@/db';
import { categoriesTable } from '@/db/schema';

const seedCategories = async () => {
  try {
    await db
      .insert(categoriesTable)
      .values([
        { name: 'Technology' },
        { name: 'Education' },
        { name: 'Gaming' },
        { name: 'Entertainment' },
        { name: 'Music' },
        { name: 'Lifestyle' },
        { name: 'Sports' },
        { name: 'News & Politics' },
        { name: 'Science & Nature' },
        { name: 'Health & Fitness' },
        { name: 'Business & Finance' },
        { name: 'Travel & Adventure' },
        { name: 'Food & Cooking' },
        { name: 'Movies & TV' },
        { name: 'DIY & Crafts' },
        { name: 'Motivation & Self-Improvement' },
        { name: 'Podcasts & Interviews' },
        { name: 'History & Culture' },
        { name: 'Comedy & Memes' },
        { name: 'Reviews & Unboxings' },
      ]);
    console.log('Categories seeded successfully!');
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    process.exit(1);
  }
};

seedCategories();
