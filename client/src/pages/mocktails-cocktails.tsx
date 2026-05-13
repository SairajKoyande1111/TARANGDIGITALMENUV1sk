import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import HamburgerMenu from "@/components/hamburger-menu";

const cocktailOffers = [
  { name: "Lamborghini", ingredients: "Wine, Bubble Gum, Fresh Fruits" },
  { name: "Rolls-Royce", ingredients: "Whiskey, Orange Juice, Soda" },
  { name: "BMW", ingredients: "Litchi Juice, Basil Leaf, Lime, Strawberry Syrup, White Rum" },
  { name: "Bugatti", ingredients: "Vodka, Gin, Blue Curacao, Tripple Shake, Soda" },
  { name: "Audi", ingredients: "Vodka, Cranberry, Orange Juice, Lime, Peach Syrup" },
  { name: "Mercedes", ingredients: "Babul Gum, Cranberry Juice, Lime, Vodka, Gin" },
  { name: "Ferrari", ingredients: "Old Monk, Orange Juice, Lime, Soda, Jaljeera Cinnamon Syrup" },
  { name: "Pagani", ingredients: "Dark Rum, Lime, Hajmola, Salt, Coke" },
  { name: "Porsche", ingredients: "Whiskey, Fresh Mint, Guava, Soda Lime" },
  { name: "Alfa Romeo", ingredients: "Whiskey, Cranberry Juice, Soda" },
  { name: "Bentley", ingredients: "Spicy Jamun, Pineapple Juice, Lime, Vodka" },
  { name: "McLaren", ingredients: "Strawberry, Lime, Fresh Mint, Orange Juice, White Rum, Gin, Energy Drink" },
  { name: "Mustang", ingredients: "Spicy Jamun, Grape Juice, Lime, Gin, White Rum" },
  { name: "Jaguar", ingredients: "Vodka, Vanilla Cream, Fashion Fruit" },
];

const mocktailOffers = [
  { name: "Pushpa", ingredients: "Blood Orange, Lime, Basil Leaf, Energy Drinks" },
  { name: "Majito Madness", ingredients: "Strawberry, Pineapple, Coco Berry, Watermelon, Kiwi, Black Grape, Orange" },
  { name: "Khatha-Mitha", ingredients: "Spicy Jamun, Pineapple Juice, Lime, Black Salt" },
  { name: "Khamosh", ingredients: "Fresh Strawberry, Lime, Berry Juice, Crushed Ice" },
  { name: "Half Ticket", ingredients: "Vanilla Ice Cream, Irish Cream, Milk, Chocolate Cream" },
  { name: "Ek Hashina Thi", ingredients: "Yuzu Syrup, Pineapple Juice, Grape Juice, Crushed Ice" },
  { name: "Choti Si Baat", ingredients: "Black Grape, Fresh Mint, Black Salt, Lime" },
  { name: "Kahani", ingredients: "Pineapple Juice, Vanilla Ice Cream, Coconut Cream, Strawberry" },
  { name: "Kuch Kuch Hotha He", ingredients: "Raw Mango Crush, Pineapple Juice, Mango Juice, Fresh Mint, Black Salt" },
  { name: "Anoka", ingredients: "Strawberry Fraise, Choco Syrup, Cream, Milk" },
  { name: "Sil Sila", ingredients: "Pomegranate, Lime, Cranberry Juice, Salt" },
  { name: "Farar", ingredients: "Kiwi, Water Melon, Lime, Energy Drinks" },
  { name: "Teesri Manzil", ingredients: "Vanilla Ice Cream, Fresh Cream, Litchi Juice, Blue Curacao" },
  { name: "Insaf", ingredients: "Pineapple Juice, Coconut Syrup, Fresh Cream, Vanilla Ice Cream" },
];

function ItemCard({ name, ingredients, index }: { name: string; ingredients: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="flex flex-col px-4 py-3 rounded-xl"
      style={{
        background: "rgba(228,155,29,0.07)",
        border: "1px solid rgba(228,155,29,0.22)",
      }}
      data-testid={`offer-item-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <p
        className="font-bold text-[15px] leading-tight"
        style={{ color: "var(--bb-gold)", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.04em" }}
      >
        {name}
      </p>
      <p
        className="text-[11px] mt-0.5 leading-snug"
        style={{ color: "var(--bb-text)", opacity: 0.65 }}
      >
        {ingredients}
      </p>
    </motion.div>
  );
}

export default function MocktailsCocktails() {
  const [, setLocation] = useLocation();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <div className="bb-bg min-h-screen">
      <header className="bb-header sticky top-0 z-30 elegant-shadow">
        <div className="container mx-auto px-2 sm:px-4 pt-1 pb-2.5">
          <div className="flex items-center w-full">
            <div className="flex items-center flex-shrink-0" style={{ width: "44px" }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLocation("/menu")}
                className="hover:bg-transparent flex-shrink-0"
                style={{ color: "#333333" }}
                data-testid="button-back"
              >
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>

            <div className="flex-1 flex justify-center items-center overflow-visible">
              <img
                src="/tarang-logo-circle.png"
                alt="Tarang Kitchen & Bar"
                style={{ height: "68px", width: "68px", objectFit: "contain", display: "block", transform: "scale(1.45)", transformOrigin: "center", marginTop: "8px" }}
                data-testid="img-logo"
              />
            </div>

            <div className="flex justify-end items-center flex-shrink-0" style={{ width: "44px" }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
                className="hover:bg-transparent"
                style={{ color: "#333333" }}
                data-testid="button-menu-toggle"
              >
                {showHamburgerMenu ? (
                  <X className="h-7 w-7 sm:h-8 sm:w-8 md:h-6 md:w-6" />
                ) : (
                  <MenuIcon className="h-7 w-7 sm:h-8 sm:w-8 md:h-6 md:w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <HamburgerMenu
          isOpen={showHamburgerMenu}
          onClose={() => setShowHamburgerMenu(false)}
          onCategoryClick={(id) => {
            if (id === "mocktails") setLocation("/menu/bar/mocktails-drinks");
            else if (id === "cocktails") setLocation("/menu/bar/cocktails");
            else if (id === "desserts") setLocation("/menu/desserts/desserts");
            else setLocation(`/menu/${id}`);
          }}
        />
      </header>

      <div className="container mx-auto px-3 sm:px-4 pt-5 pb-24">

        {/* Page header */}
        <div className="text-center mb-5">
          <p
            className="text-[10px] uppercase tracking-[0.35em] font-light mb-1"
            style={{ color: "var(--bb-gold)", opacity: 0.8 }}
          >
            Exclusive Offer
          </p>
          <h1
            className="text-2xl font-black uppercase tracking-widest leading-tight"
            style={{ color: "var(--bb-gold)", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Buy 1 Get 1 Free
          </h1>
          <p
            className="text-[11px] mt-1 uppercase tracking-widest"
            style={{ color: "var(--bb-text)", opacity: 0.55 }}
          >
            Mocktails &amp; Cocktails
          </p>
        </div>

        {/* ── COCKTAILS SECTION ── */}
        <div className="mb-6">
          {/* Section header */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-xl mb-3"
            style={{
              background: "linear-gradient(90deg, rgba(228,155,29,0.18), rgba(228,155,29,0.06))",
              border: "1.5px solid rgba(228,155,29,0.35)",
            }}
          >
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.3em] font-light"
                style={{ color: "var(--bb-gold)", opacity: 0.8 }}
              >
                With Alcohol
              </p>
              <h2
                className="text-xl font-black uppercase tracking-widest"
                style={{ color: "var(--bb-gold)", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Cocktails
              </h2>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--bb-gold)", opacity: 0.7 }}>
                1 + 1 =
              </p>
              <p
                className="text-2xl font-black"
                style={{ color: "var(--bb-gold)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}
              >
                ₹499
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {cocktailOffers.map((item, i) => (
              <ItemCard key={item.name} name={item.name} ingredients={item.ingredients} index={i} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-[1px] w-full my-5"
          style={{ background: "linear-gradient(90deg, transparent, rgba(228,155,29,0.35), transparent)" }}
        />

        {/* ── MOCKTAILS SECTION ── */}
        <div className="mb-6">
          {/* Section header */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-xl mb-3"
            style={{
              background: "linear-gradient(90deg, rgba(228,155,29,0.18), rgba(228,155,29,0.06))",
              border: "1.5px solid rgba(228,155,29,0.35)",
            }}
          >
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.3em] font-light"
                style={{ color: "var(--bb-gold)", opacity: 0.8 }}
              >
                Non-Alcoholic
              </p>
              <h2
                className="text-xl font-black uppercase tracking-widest"
                style={{ color: "var(--bb-gold)", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Mocktails
              </h2>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--bb-gold)", opacity: 0.7 }}>
                1 + 1 =
              </p>
              <p
                className="text-2xl font-black"
                style={{ color: "var(--bb-gold)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}
              >
                ₹399
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {mocktailOffers.map((item, i) => (
              <ItemCard key={item.name} name={item.name} ingredients={item.ingredients} index={cocktailOffers.length + i} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
