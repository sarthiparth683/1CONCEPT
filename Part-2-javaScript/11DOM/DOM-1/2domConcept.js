//=============================================================================
// WHAT IS DOM?
// The Document Object Model (DOM) is a programming interface for web documents.It represents the page structure as a tree of objects that can be manipulated.
//=============================================================================

//=============================================================================
// 1. SELECTING ELEMENTS by:- id,class,tag,querySelector
//=============================================================================

function demoSelect() {
  const byId = document.getElementById("selectDemo");
  console.log("By ID:", byId);

  const byClass = document.getElementsByClassName("text");
  console.log("By Class:", byClass);
  console.log("Count:", byClass.length);

  const byTag = document.getElementsByTagName("span");
  console.log("By Tag:", byTag);

  const query = document.querySelector(".text");
  console.log("querySelector (first):", query);

  const queryAll = document.querySelectorAll(".text");
  console.log("querySelectorAll (all):", queryAll);

  alert(`Results are in Console...`);
}

//=============================================================================
// 2. PROPERTIES:- innerText: visible text only | textContent: all text | innerHTML: HTML markup
//=============================================================================
function demoProperties() {
  const element = document.getElementById("propDemo").children[0];
  console.log("innerText:", element.innerText);
  console.log("textContent:", element.textContent);
  console.log("innerHTML:", element.innerHTML);
  console.log("tagName:", element.tagName);

  alert(
    `innerText: "${element.innerText}"
     textContent: "${element.textContent}"
     innerHTML: "${element.innerHTML}"
     tagName: ${element.tagName}`,
  );
}

//=============================================================================
// 3. ATTRIBUTES
// Get and set HTML attributes (src, href, id, class, data-*, etc.)
//=============================================================================
function changeAttribute() {
  const img = document.getElementById("demoImg");
  const newUrl = document.getElementById("newImgUrl").value;

  if (newUrl) {
    img.setAttribute("src", newUrl);
    img.setAttribute("alt", "New Image");
    alert("✓ Image updated successfully!");
  } else {
    alert("⚠ Please enter an image URL!");
  }
}

function getAttributes() {
  const img = document.getElementById("demoImg");
  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");
  const width = img.getAttribute("width");
  alert(`Current Attributes:
src: ${src}
alt: ${alt}
width: ${width}`);
}

//=============================================================================
// 4. STYLING
//=============================================================================
function applyStyles() {
  const element = document.getElementById("styleText");

  element.style.color = "#030203ff";
  element.style.background =
    "linear-gradient(to left, #65c010ff, #ca0b0bff, #121cabff)";
  element.style.padding = "20px";
  element.style.fontSize = "24px";
  element.style.borderRadius = "8px";
  element.style.fontWeight = "bold";
  element.style.textAlign = "center";
  element.style.transition = "all 0.3s ease";
  element.style.border = "5px solid black";
}

function resetStyles() {
  const element = document.getElementById("styleText");
  element.removeAttribute("style");
}

//=============================================================================
// 5. CREATING & INSERTING ELEMENTS
// Four methods: append, prepend, before, after
//=============================================================================
function demoInsert() {
  const mainPara = document.getElementById("mainPara");
  mainPara.style.border = "2px solid black";
  mainPara.style.background = "linear-gradient(to right, green, blue, grey)";

  // append() - Adds at the END inside the element
  const appendEl = document.createElement("p");
  appendEl.textContent = "✓ append() - Added inside at end";
  mainPara.append(appendEl);

  // prepend() - Adds at the START inside the element
  const prependEl = document.createElement("p");
  prependEl.textContent = "✓ prepend() - Added inside at start";
  mainPara.prepend(prependEl);

  // before() - Adds BEFORE the element (outside, as sibling)
  const beforeEl = document.createElement("p");
  beforeEl.textContent = "✓ before() - Added outside before";
  mainPara.before(beforeEl);

  // after() - Adds AFTER the element (outside, as sibling)
  const afterEl = document.createElement("p");
  afterEl.textContent = "✓ after() - Added outside after";
  mainPara.after(afterEl);
}

function clearInserts() {
  const container = document.getElementById("insertDemo");
  container.innerHTML = '<p id="mainPara">Main Paragraph</p>';
}
//=============================================================================
// 6. REMOVING ELEMENTS-Delete elements from the DOM using .remove()
//=============================================================================
function removeElements() {
  const container = document.getElementById("removeDemo");
  console.log("Container", container);
  const children = [...container.children];
  console.log("children", children);
  children.forEach((child) => child.remove());

  // Add confirmation message
  const msg = document.createElement("p");
  msg.textContent = "✓ All items removed!";
  container.append(msg);
}

function restoreItems() {
  const container = document.getElementById("removeDemo");
  container.innerHTML = `
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
    `;
}

//=============================================================================
// 7. CLASSLIST MANIPULATION
// Add, remove, toggle, and check classes dynamically
//=============================================================================
function addClasses() {
  const element = document.getElementById("classDemo");
  element.classList.add("highlight", "bold-text", "large-text");
  alert(`✓ Classes added:-, ${element.className}`);
}

function removeClasses() {
  const element = document.getElementById("classDemo");
  element.classList.remove("highlight", "bold-text");
  alert(`✓ Classes removed, ${element.className}`);
}

function toggleClass() {
  const element = document.getElementById("classDemo");
  element.classList.toggle("border-class");

  // classList.contains() - Check if class exists
  const hasClass = element.classList.contains("border-class");
  console.log("Has border-class:", hasClass);
  alert(`✓ Border class ${hasClass ? "added" : "removed"}`);
}

function checkClass() {
  const element = document.getElementById("classDemo");
  alert(`${element.className}`);
}

//=============================================================================
// 8. EVENT HANDLING - Respond to user interactions (click, hover, keyboard, etc.)
//=============================================================================
document.getElementById("clickBtn")?.addEventListener("click", function (e) {
  const output = document.getElementById("eventOutput");
  output.textContent = `✓ Button clicked! Event type: ${e.type}`;
  alert(`Event object ${e}, Target element-${e.target}, Event type:${e.type}`);
});

// Mouse enter event
document
  .getElementById("hoverBtn")
  ?.addEventListener("mouseenter", function (e) {
    const output = document.getElementById("eventOutput");
    output.textContent = `✓ Mouse entered! Position: (${e.clientX}, ${e.clientY})`;
    output.style.color = "#7c3aed";
    e.target.style.background = "#7c3aed";
  });

// Mouse leave event
document
  .getElementById("hoverBtn")
  ?.addEventListener("mouseleave", function (e) {
    e.target.style.background = "#2563eb";
  });

// Keyboard event
document.getElementById("inputField")?.addEventListener("keyup", function (e) {
  const output = document.getElementById("eventOutput");
  output.textContent = `✓ Key: "${e.key}" | Value: "${e.target.value}"`;
  output.style.color = "#2563eb";
});

//=============================================================================
// 9. DOM TRAVERSING - Navigate between parent, children, and sibling elements
//=============================================================================
function demoTraverse() {
  const middle = document.getElementById("middleChild");

  // Parent element
  const parent = middle.parentElement;
  console.log("Parent:", parent);

  // Children of parent
  const children = parent.children;
  console.log("All children:", children);

  // First and last child
  console.log("First child:", parent.firstElementChild);
  console.log("Last child:", parent.lastElementChild);

  // Previous and next siblings
  const prevSibling = middle.previousElementSibling;
  const nextSibling = middle.nextElementSibling;
  console.log("Previous sibling:", prevSibling);
  console.log("Next sibling:", nextSibling);

  // Visual highlight
  middle.style.background = "#fef08a";
  prevSibling.style.color = "#dc2626";
  nextSibling.style.color = "#46e01bff";
  parent.style.border = "2px solid #3fcd10ff";
}

//=============================================================================
// 10. PRACTICAL EXAMPLE - DYNAMIC PRODUCT CARDS
//=============================================================================
const products = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=300&h=300&fit=crop",
    category: "Electronics",
  },
  {
    id: 2,
    title: "MacBook Air M2",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
    category: "Electronics",
  },
  {
    id: 3,
    title: "AirPods Pro",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=300&h=300&fit=crop",
    category: "Electronics",
  },
  {
    id: 4,
    title: "Nike Air Max",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    category: "Footwear",
  },
  {
    id: 5,
    title: "Smart Watch",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    category: "Electronics",
  },
];

function displayProducts() {
  const container = document.getElementById("productContainer");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `$${product.price}`;

    const category = document.createElement("p");
    category.className = "category";
    category.textContent = product.category;

    const btn = document.createElement("button");
    btn.textContent = "Add to Cart";

    // Append all elements (Creating DOM structure)
    card.append(img, title, price, category, btn);
    container.append(card);

    // Add event listener
    btn.addEventListener("click", function () {
      alert(`✓ Added "${product.title}" to cart! \n Price: $${product.price}`);
      btn.textContent = "Added ✓";
      btn.style.background = "#059669";

      setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.style.background = "#2563eb";
      }, 2000);
    });
    
  });
}

displayProducts();
//=============================================================================
