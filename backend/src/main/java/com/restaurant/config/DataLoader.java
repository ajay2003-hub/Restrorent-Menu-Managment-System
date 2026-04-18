package com.restaurant.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.restaurant.model.MenuItem;
import com.restaurant.repository.MenuRepository;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner init(MenuRepository repo) {
        return args -> {

            repo.deleteAll();

            // 🔹 STARTERS
            repo.save(new MenuItem("Spicy Corn Soup",
                    "Sweet corn soup with mild spices",
                    119,
                    "https://images.unsplash.com/photo-1612292699631-65af4d4a0be9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BpY3klMjBjb3JuJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D",
                    "Starter", true, false, true));

            repo.save(new MenuItem("Green Salad",
                    "Healthy salad with veggies",
                    110,
                    "https://plus.unsplash.com/premium_photo-1690561082420-fad21ede2431?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "Starter", true, false, true));

            repo.save(new MenuItem("Hot & Sour Soup",
                    "Tangy spicy soup",
                    130,
                    "https://images.unsplash.com/photo-1746431565519-4352675bd721?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "Starter", true, true, false));

            repo.save(new MenuItem("Samosa Chaat",
                    "Crispy samosa with chutney",
                    69,
                    "https://media.istockphoto.com/id/2269174395/photo/samosa-chaat-topped-yogurt-chutney-sev-chickpeas-onion-indian-street-food-spicy-tangy-snack.jpg?s=612x612&w=0&k=20&c=jpHTXs5vq2aeYKGQbZLg7mxb_3gxQPPbsF3CHXn27Qw=",
                    "Starter", true, true, true));

            // 🔹 MAIN COURSE
            repo.save(new MenuItem("Paneer Tikka",
                    "Grilled paneer",
                    279,
                    "https://media.istockphoto.com/id/1403309722/photo/paneer-tikka.webp?a=1&b=1&s=612x612&w=0&k=20&c=9XWPtApntGCu_gUVwr_DFgQLrVdmrNPOYLFuZxq4pcg=",
                    "Main", true, false, true));

            repo.save(new MenuItem("Chicken 65",
                    "Spicy fried chicken",
                    329,
                    "https://media.istockphoto.com/id/1265209311/photo/fried-chicken-kebab-or-kabab.jpg?s=1024x1024&w=is&k=20&c=nNmArHAO2bJibeW_2ZcbI92rVDLgVCzZMpGwl-Lg7Do=",
                    "Main", false, true, true));

            repo.save(new MenuItem("Veg Fried Rice",
                    "Rice with veggies",
                    220,
                    "https://images.unsplash.com/photo-1765872690457-2b1d2b8ca6d8?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "Main", true, false, true));

            repo.save(new MenuItem("Paneer Butter Masala",
                    "Creamy paneer curry",
                    299,
                    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhfGVufDB8fDB8fHww",
                    "Main", true, false, true));

            repo.save(new MenuItem("Butter Chicken",
                    "Rich chicken gravy",
                    369,
                    "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnV0dGVyJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
                    "Main", false, false, true));

            repo.save(new MenuItem("Chicken Biryani",
                    "Spicy biryani",
                    329,
                    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "Main", false, true, true));

            repo.save(new MenuItem("Veg Biryani",
                    "Veg biryani",
                    279,
                    "https://images.unsplash.com/photo-1708782345014-db93ddd5608f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "Main", true, true, false));

            // 🔹 INDIAN
            repo.save(new MenuItem("Masala Dosa",
                    "Crispy dosa",
                    210,
                    "https://images.unsplash.com/photo-1606888476625-ddf0393a172d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "Indian", true, false, true));

            repo.save(new MenuItem("Dal Makhani",
                    "Creamy dal",
                    259,
                    "https://images.unsplash.com/photo-1736680056463-8b5e0fd9357e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "Indian", true, false, false));

            repo.save(new MenuItem("Roti",
                    "Whole wheat roti",
                    19,
                    "https://media.istockphoto.com/id/1290501624/photo/close-up-shot-of-cooking-a-roti-or-chappati-being-roasted-puffed-and-swollen-on-a-blue-gas.webp?a=1&b=1&s=612x612&w=0&k=20&c=a77KAJZK4xCNv1ejnXAWHHruXcepXhmn7xAQHhmz5Xg=",
                    "Indian", true, false, false));

            repo.save(new MenuItem("Garlic Naan",
                    "Garlic naan",
                    69,
                    "https://images.unsplash.com/photo-1559561724-4ea348cd867f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdhcmxpYyUyME5hYW58ZW58MHx8MHx8fDA%3D",
                    "Indian", true, false, true));

            // 🔹 DESSERTS
            repo.save(new MenuItem("Gulab Jamun",
                    "Sweet dessert",
                    299,
                    "https://media.istockphoto.com/id/521802535/photo/gulab-jamun-12.jpg?s=1024x1024&w=is&k=20&c=VlpJp9kVcDTUim5WapWTTkuyrmMhem1x3U7f63HVYqM=",
                    "Dessert", true, false, true));

            repo.save(new MenuItem("Rasmalai",
                    "Milk sweet",
                    199,
                    "https://media.istockphoto.com/id/1615937980/photo/ras-malai-in-a-bowl-on-isolated-background-with-flowers.jpg?s=1024x1024&w=is&k=20&c=t1Vc0kn8EGWQW7CGvw144iUC_p3Uz_sL5YnupW3PJCs=",
                    "Dessert", true, false, true));

            repo.save(new MenuItem("Jalebi",
                    "Crispy sweet",
                    120,
                    "https://media.istockphoto.com/id/1430753492/photo/indian-sweet-jalebi.webp?a=1&b=1&s=612x612&w=0&k=20&c=aO_1E0NcBstoEmqR8Bpw_eJpMT16eFUTcTdxHrOeHuM=",
                    "Dessert", true, false, false));

            // 🔹 DRINKS
            repo.save(new MenuItem("Mango Lassi",
                    "Sweet mango drink",
                    119,
                    "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuZ28lMjBMYXNzaXxlbnwwfHwwfHx8MA%3D%3D",
                    "Drinks", true, false, true));

            repo.save(new MenuItem("Masala Chai",
                    "Indian tea",
                    29,
                    "https://media.istockphoto.com/id/1128172438/photo/tea-served-in-a-clay-cup-with-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=XiuAk9TXeg1bsoKqzCcSpTRpDJ0AtHOt1mqjpQjV4Z8=",
                    "Drinks", true, false, true));

            repo.save(new MenuItem("Sweet Lassi",
                    "Sweet yogurt drink",
                    149,
                    "https://media.istockphoto.com/id/2214375556/photo/lassi-in-clay-cup-topped-with-dry-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=OsxAg9ZKpsQI-lc4bcmujNQb6kQCPVUun4e_aHeEUMY=",
                    "Drinks", true, false, false));
        };
    }

}