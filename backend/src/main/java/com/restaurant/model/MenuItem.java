package com.restaurant.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "menu")
public class MenuItem {

    @Id
    private String id;

    private String name;
    private String description;
    private int price;
    private String image;
    private String category;
    private boolean veg;
    private boolean spicy;
    private boolean popular;


    public MenuItem(String name, String description, int price, String image,
                    String category, boolean veg, boolean spicy, boolean popular) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
        this.veg = veg;
        this.spicy = spicy;
        this.popular = popular;
    }
    // getters & setters

    public String getId() { return id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public boolean isVeg() { return veg; }
    public void setVeg(boolean veg) { this.veg = veg; }

    public boolean isSpicy() { return spicy; }
    public void setSpicy(boolean spicy) { this.spicy = spicy; }

    public boolean isPopular() { return popular; }
    public void setPopular(boolean popular) { this.popular = popular; }
}