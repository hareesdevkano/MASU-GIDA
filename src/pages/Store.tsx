
import { useState } from "react";
import { ShoppingCart, Star, Filter, Search, Plus, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Store = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Official Home Jersey 2025/26",
      category: "jerseys",
      price: 25000,
      originalPrice: 30000,
      image: "/lovable-uploads/040a5637-47e5-402e-9f90-4e2dd0abb901.png",
      rating: 4.9,
      reviews: 234,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White/Yellow/Green"],
      inStock: true,
      featured: true,
      description: "Brand new 2025/26 season jersey with AO and RFI Hausa sponsorship"
    },
    {
      id: 2,
      name: "Official Home Jersey 2024/25",
      category: "jerseys",
      price: 15000,
      originalPrice: 18000,
      image: "photo-1500673922987-e212871fec22",
      rating: 4.8,
      reviews: 156,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Yellow/Green"],
      inStock: true,
      featured: false,
      description: "Official home jersey featuring the classic yellow and green colors"
    },
    {
      id: 3,
      name: "Official Away Jersey 2024/25",
      category: "jerseys",
      price: 15000,
      originalPrice: 18000,
      image: "photo-1605810230434-7631ac76ec81",
      rating: 4.7,
      reviews: 98,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White/Green"],
      inStock: true,
      featured: false,
      description: "Official away jersey with modern design and premium fabric"
    },
    {
      id: 4,
      name: "Sai Masu Gida Supporters Scarf",
      category: "accessories",
      price: 3500,
      originalPrice: 4000,
      image: "photo-1488590528505-98d2b5aba04b",
      rating: 4.9,
      reviews: 234,
      sizes: ["One Size"],
      colors: ["Yellow/Green"],
      inStock: true,
      featured: true,
      description: "Show your support with this premium quality supporters scarf"
    },
    {
      id: 4,
      name: "Kano Pillars Baseball Cap",
      category: "accessories",
      price: 4500,
      originalPrice: 5000,
      image: "photo-1472396961693-142e6e269027",
      rating: 4.6,
      reviews: 67,
      sizes: ["One Size"],
      colors: ["Yellow", "Green", "Black"],
      inStock: true,
      featured: false,
      description: "Adjustable baseball cap with embroidered club logo"
    },
    {
      id: 5,
      name: "Club Logo Coffee Mug",
      category: "lifestyle",
      price: 2500,
      originalPrice: 3000,
      image: "photo-1466721591366-2d5fba72006d",
      rating: 4.5,
      reviews: 89,
      sizes: ["One Size"],
      colors: ["White", "Yellow"],
      inStock: true,
      featured: false,
      description: "Ceramic mug perfect for your morning coffee or tea"
    },
    {
      id: 6,
      name: "Training Shorts",
      category: "training",
      price: 8000,
      originalPrice: 10000,
      image: "photo-1500673922987-e212871fec22",
      rating: 4.4,
      reviews: 45,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Yellow", "Green"],
      inStock: false,
      featured: false,
      description: "Comfortable training shorts with moisture-wicking fabric"
    },
    {
      id: 7,
      name: "Club Polo Shirt",
      category: "lifestyle",
      price: 12000,
      originalPrice: 14000,
      image: "photo-1605810230434-7631ac76ec81",
      rating: 4.7,
      reviews: 78,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Yellow", "Green", "White"],
      inStock: true,
      featured: false,
      description: "Elegant polo shirt perfect for casual wear"
    },
    {
      id: 8,
      name: "Stadium Seat Cushion",
      category: "accessories",
      price: 3000,
      originalPrice: 3500,
      image: "photo-1488590528505-98d2b5aba04b",
      rating: 4.3,
      reviews: 123,
      sizes: ["One Size"],
      colors: ["Yellow/Green"],
      inStock: true,
      featured: false,
      description: "Comfortable cushion for stadium seating"
    }
  ];

  const categories = [
    { id: "all", label: "All Products", count: products.length },
    { id: "jerseys", label: "Jerseys", count: products.filter(p => p.category === "jerseys").length },
    { id: "accessories", label: "Accessories", count: products.filter(p => p.category === "accessories").length },
    { id: "lifestyle", label: "Lifestyle", count: products.filter(p => p.category === "lifestyle").length },
    { id: "training", label: "Training", count: products.filter(p => p.category === "training").length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || product.category === filter;
    return matchesSearch && matchesFilter;
  });

  const featuredProducts = products.filter(product => product.featured);

  const addToCart = (product, size = "M", color = product.colors[0]) => {
    const cartItem = {
      ...product,
      selectedSize: size,
      selectedColor: color,
      quantity: 1,
      cartId: `${product.id}-${size}-${color}`
    };
    
    const existingItem = cart.find(item => item.cartId === cartItem.cartId);
    if (existingItem) {
      setCart(cart.map(item => 
        item.cartId === cartItem.cartId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, cartItem]);
    }
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(cartId);
    } else {
      setCart(cart.map(item => 
        item.cartId === cartId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Official Store
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Shop authentic Kano Pillars FC merchandise and show your pride
          </p>
        </div>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <section className="py-4 bg-yellow-100 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span className="font-medium">
                  {cart.reduce((total, item) => total + item.quantity, 0)} items in cart
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold text-lg">{formatPrice(getTotalPrice())}</span>
                <Button className="bg-green-600 hover:bg-green-700">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`${filter === category.id ? "bg-yellow-500 hover:bg-yellow-600 text-black" : ""}`}
                size="sm"
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {filter === "all" && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't miss our most popular items
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                   <div className="relative">
                     {product.image.startsWith('/lovable-uploads/') ? (
                       <img 
                         src={product.image} 
                         alt={product.name}
                         className="h-64 w-full object-cover"
                       />
                     ) : (
                       <div className="h-64 bg-gradient-to-r from-yellow-200 to-green-200 flex items-center justify-center">
                         <div className="text-center text-gray-600">
                           <ShoppingCart className="h-16 w-16 mx-auto mb-4" />
                           <p>Product Image</p>
                         </div>
                       </div>
                     )}
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      Featured
                    </Badge>
                    {product.originalPrice > product.price && (
                      <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                        Sale
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-green-600">{formatPrice(product.price)}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-400 line-through ml-2">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <Button 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    {product.image.startsWith('/lovable-uploads/') ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="h-48 bg-gradient-to-r from-yellow-200 to-green-200 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <ShoppingCart className="h-12 w-12 mx-auto mb-2" />
                          <p className="text-sm">Product Image</p>
                        </div>
                      </div>
                    )}
                    {product.originalPrice > product.price && (
                      <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Badge className="bg-red-500 text-white">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-md mb-1 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="text-lg font-bold text-green-600">{formatPrice(product.price)}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through ml-2">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <Button 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                      size="sm"
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-3 w-3" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart */}
      {cart.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <Card key={item.cartId}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-yellow-200 to-green-200 rounded-lg flex items-center justify-center">
                          <ShoppingCart className="h-8 w-8 text-gray-600" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-gray-600">Size: {item.selectedSize}</p>
                          <p className="text-gray-600">Color: {item.selectedColor}</p>
                          <p className="font-bold text-green-600">{formatPrice(item.price)}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeFromCart(item.cartId)}
                        >
                          Remove
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{formatPrice(getTotalPrice())}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>₦2,000</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span>{formatPrice(getTotalPrice() + 2000)}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Store;
