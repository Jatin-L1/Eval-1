import React from 'react';
import '../assets/Features.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Features = () => {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    
    return (
        <>
        <Particles
            id="particles"
            init={particlesInit}
            options={{
                "autoPlay": true,
                "background": {
                  "color": {
                    "value": "#000"
                  },
                  "image": "",
                  "position": "",
                  "repeat": "",
                  "size": "",
                  "opacity": 1
                },
                "backgroundMask": {
                  "composite": "destination-out",
                  "cover": {
                    "color": {
                      "value": "#fff"
                    },
                    "opacity": 1
                  },
                  "enable": false
                },
                "clear": true,
                "defaultThemes": {},
                "delay": 0,
                "fullScreen": {
                  "enable": true,
                  "zIndex": -1
                },
                "detectRetina": true,
                "duration": 0,
                "fpsLimit": 120,
                "interactivity": {
                  "detectsOn": "window",
                  "events": {
                    "onClick": {
                      "enable": false,
                      "mode": []
                    },
                    "onDiv": {
                      "selectors": [],
                      "enable": false,
                      "mode": [],
                      "type": "circle"
                    },
                    "onHover": {
                      "enable": true,
                      "mode": "trail",
                      "parallax": {
                        "enable": false,
                        "force": 2,
                        "smooth": 10
                      }
                    },
                    "resize": {
                      "delay": 0.5,
                      "enable": true
                    }
                  },
                  "modes": {
                    "trail": {
                      "delay": 0.005,
                      "pauseOnStop": true,
                      "quantity": 5,
                      "particles": {
                        "color": {
                          "value": "#ff0000",
                          "animation": {
                            "enable": true,
                            "speed": 400,
                            "sync": true
                          }
                        },
                        "collisions": {
                          "enable": false
                        },
                        "links": {
                          "enable": false
                        },
                        "move": {
                          "outModes": {
                            "default": "destroy"
                          },
                          "speed": 2
                        },
                        "size": {
                          "value": {
                            "min": 1,
                            "max": 5
                          },
                          "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": true,
                            "startValue": "min",
                            "destroy": "max"
                          }
                        }
                      }
                    },
                    "attract": {
                      "distance": 200,
                      "duration": 0.4,
                      "easing": "ease-out-quad",
                      "factor": 1,
                      "maxSpeed": 50,
                      "speed": 1
                    },
                    "bounce": {
                      "distance": 200
                    },
                    "bubble": {
                      "distance": 200,
                      "duration": 0.4,
                      "mix": false,
                      "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "mix": false,
                        "selectors": []
                      }
                    },
                    "connect": {
                      "distance": 80,
                      "links": {
                        "opacity": 0.5
                      },
                      "radius": 60
                    },
                    "grab": {
                      "distance": 100,
                      "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                      }
                    },
                    "push": {
                      "default": true,
                      "groups": [],
                      "quantity": 4
                    },
                    "remove": {
                      "quantity": 2
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4,
                      "factor": 100,
                      "speed": 1,
                      "maxSpeed": 50,
                      "easing": "ease-out-quad",
                      "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "factor": 100,
                        "speed": 1,
                        "maxSpeed": 50,
                        "easing": "ease-out-quad",
                        "selectors": []
                      }
                    },
                    "slow": {
                      "factor": 3,
                      "radius": 200
                    },
                    "light": {
                      "area": {
                        "gradient": {
                          "start": {
                            "value": "#ffffff"
                          },
                          "stop": {
                            "value": "#000000"
                          }
                        },
                        "radius": 1000
                      },
                      "shadow": {
                        "color": {
                          "value": "#000000"
                        },
                        "length": 2000
                      }
                    }
                  }
                },
                "manualParticles": [],
                "particles": {
                  "bounce": {
                    "horizontal": {
                      "value": 1
                    },
                    "vertical": {
                      "value": 1
                    }
                  },
                  "collisions": {
                    "absorb": {
                      "speed": 2
                    },
                    "bounce": {
                      "horizontal": {
                        "value": 1
                      },
                      "vertical": {
                        "value": 1
                      }
                    },
                    "enable": false,
                    "maxSpeed": 50,
                    "mode": "bounce",
                    "overlap": {
                      "enable": true,
                      "retries": 0
                    }
                  },
                  "color": {
                    "value": "#ff0000",
                    "animation": {
                      "h": {
                        "count": 0,
                        "enable": true,
                        "speed": 50,
                        "decay": 0,
                        "delay": 0,
                        "sync": false,
                        "offset": 0
                      },
                      "s": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                      },
                      "l": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                      }
                    }
                  },
                  "effect": {
                    "close": true,
                    "fill": true,
                    "options": {},
                    "type": []
                  },
                  "groups": {},
                  "move": {
                    "angle": {
                      "offset": 0,
                      "value": 90
                    },
                    "attract": {
                      "distance": 200,
                      "enable": false,
                      "rotate": {
                        "x": 3000,
                        "y": 3000
                      }
                    },
                    "center": {
                      "x": 50,
                      "y": 50,
                      "mode": "percent",
                      "radius": 0
                    },
                    "decay": 0,
                    "distance": {},
                    "direction": "none",
                    "drift": 0,
                    "enable": true,
                    "gravity": {
                      "acceleration": 9.81,
                      "enable": false,
                      "inverse": false,
                      "maxSpeed": 50
                    },
                    "path": {
                      "clamp": true,
                      "delay": {
                        "value": 0
                      },
                      "enable": false,
                      "options": {}
                    },
                    "outModes": {
                      "default": "out",
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    },
                    "random": false,
                    "size": false,
                    "speed": 2,
                    "spin": {
                      "acceleration": 0,
                      "enable": false
                    },
                    "straight": false,
                    "trail": {
                      "enable": false,
                      "length": 10,
                      "fill": {}
                    },
                    "vibrate": false,
                    "warp": false
                  },
                  "number": {
                    "density": {
                      "enable": true,
                      "width": 1920,
                      "height": 1080
                    },
                    "limit": {
                      "mode": "delete",
                      "value": 0
                    },
                    "value": 100
                  },
                  "opacity": {
                    "value": {
                      "min": 0.3,
                      "max": 0.8
                    },
                    "animation": {
                      "count": 0,
                      "enable": true,
                      "speed": 0.5,
                      "decay": 0,
                      "delay": 0,
                      "sync": false,
                      "mode": "auto",
                      "startValue": "random",
                      "destroy": "none"
                    }
                  },
                  "reduceDuplicates": false,
                  "shadow": {
                    "blur": 0,
                    "color": {
                      "value": "#000"
                    },
                    "enable": false,
                    "offset": {
                      "x": 0,
                      "y": 0
                    }
                  },
                  "shape": {
                    "close": true,
                    "fill": true,
                    "options": {},
                    "type": "circle"
                  },
                  "size": {
                    "value": {
                      "min": 1,
                      "max": 3
                    },
                    "animation": {
                      "count": 0,
                      "enable": true,
                      "speed": 3,
                      "decay": 0,
                      "delay": 0,
                      "sync": false,
                      "mode": "auto",
                      "startValue": "random",
                      "destroy": "none"
                    }
                  },
                  "stroke": {
                    "width": 0
                  },
                  "zIndex": {
                    "value": 0,
                    "opacityRate": 1,
                    "sizeRate": 1,
                    "velocityRate": 1
                  },
                  "destroy": {
                    "bounds": {},
                    "mode": "none",
                    "split": {
                      "count": 1,
                      "factor": {
                        "value": 3
                      },
                      "rate": {
                        "value": {
                          "min": 4,
                          "max": 9
                        }
                      },
                      "sizeOffset": true,
                      "particles": {}
                    }
                  },
                  "roll": {
                    "darken": {
                      "enable": false,
                      "value": 0
                    },
                    "enable": false,
                    "enlighten": {
                      "enable": false,
                      "value": 0
                    },
                    "mode": "vertical",
                    "speed": 25
                  },
                  "tilt": {
                    "value": 0,
                    "animation": {
                      "enable": false,
                      "speed": 0,
                      "decay": 0,
                      "sync": false
                    },
                    "direction": "clockwise",
                    "enable": false
                  },
                  "twinkle": {
                    "lines": {
                      "enable": false,
                      "frequency": 0.05,
                      "opacity": 1
                    },
                    "particles": {
                      "enable": false,
                      "frequency": 0.05,
                      "opacity": 1
                    }
                  },
                  "wobble": {
                    "distance": 5,
                    "enable": false,
                    "speed": {
                      "angle": 50,
                      "move": 10
                    }
                  },
                  "life": {
                    "count": 0,
                    "delay": {
                      "value": 0,
                      "sync": false
                    },
                    "duration": {
                      "value": 0,
                      "sync": false
                    }
                  },
                  "rotate": {
                    "value": 0,
                    "animation": {
                      "enable": false,
                      "speed": 0,
                      "decay": 0,
                      "sync": false
                    },
                    "direction": "clockwise",
                    "path": false
                  },
                  "orbit": {
                    "animation": {
                      "count": 0,
                      "enable": false,
                      "speed": 1,
                      "decay": 0,
                      "delay": 0,
                      "sync": false
                    },
                    "enable": false,
                    "opacity": 1,
                    "rotation": {
                      "value": 45
                    },
                    "width": 1
                  },
                  "links": {
                    "blink": false,
                    "color": {
                      "value": "random"
                    },
                    "consent": false,
                    "distance": 100,
                    "enable": true,
                    "frequency": 1,
                    "opacity": 1,
                    "shadow": {
                      "blur": 5,
                      "color": {
                        "value": "#000"
                      },
                      "enable": false
                    },
                    "triangles": {
                      "enable": false,
                      "frequency": 1
                    },
                    "width": 1,
                    "warp": false
                  },
                  "repulse": {
                    "value": 0,
                    "enabled": false,
                    "distance": 1,
                    "duration": 1,
                    "factor": 1,
                    "speed": 1
                  }
                },
                "pauseOnBlur": true,
                "pauseOnOutsideViewport": true,
                "responsive": [],
                "smooth": false,
                "style": {},
                "themes": [],
                "zLayers": 100,
                "emitters": [],
                "motion": {
                  "disable": false,
                  "reduce": {
                    "factor": 4,
                    "value": true
                  }
                }
              }}
        />
        <div className="featuresMain">
            <h1 id="features_heading">Features of SecureX</h1>
            <div className="feature_cards">
                <a href="#simple-list-item-1" className="feature-link" style={{ textDecoration: 'none' }}>
                    <div className="feature-card">
                        <div className="icon">🔒</div>
                        <h6>Message Privately</h6>
                        <p>End-to-end encryption and privacy controls.</p>
                    </div>
                </a>
                <a href="#simple-list-item-2" className="feature-link" style={{ textDecoration: 'none' }}>
                    <div className="feature-card">
                        <div className="icon">🌐</div>
                        <h6>Stay Connected</h6>
                        <p>Message and call for free* around the world.</p>
                    </div>
                </a>
                <a href="#simple-list-item-3" className="feature-link" style={{ textDecoration: 'none' }}>
                    <div className="feature-card">
                        <div className="icon">👥</div>
                        <h6>Build Community</h6>
                        <p>Group conversations made simple.</p>
                    </div>
                </a>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-8">
                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                        <div id="simple-list-item-1">
                            <div className="features_content">
                                <div className="left_content">
                                    <h1>Message Privately</h1>
                                    <p id="under_heading">Your privacy is our priority. With end-to-end encryption, you can be sure that your personal messages stay between you and who you send them to.</p>
                                </div>
                                <div className="right_content">
                                    <img src="./Images/messaging_privately.webp" alt="Messaging Privately" />
                                </div>
                            </div>
                            <div className="below_features_content">
                                <div className="no_1">
                                    <h5>End-to-end Encryption:</h5>
                                    <p>Your conversations are protected with industry-leading end-to-end encryption, ensuring that only you and the intended recipient can read the messages. No third parties, not even the web servers itself, can access your messages.</p>
                                </div>
                                <div className="no_2">
                                    <h5>Password Protected Chats:</h5>
                                    <p>Add an extra layer of security to your conversations with password-protected chats. Only users with the correct password can access the chat, providing another level of privacy.</p>
                                </div>
                                <div className="no_3">
                                    <h5>Secure File Sharing:</h5>
                                    <p>Share files, images, and videos privately. All attachments are encrypted, ensuring that your data remains secure, both in transit and at rest.</p>
                                </div>
                            </div>
                        </div>
                        <div id="simple-list-item-2">
                            <div className="features_content">
                                <div className="left_content">
                                    <h1>Stay Connected</h1>
                                    <p id="under_heading">Message and call for free* around the world and stay close to the people that matter to you with reliable messaging and calling</p>
                                </div>
                                <div className="right_content">
                                    <img src="./Images/stay_connected.webp" alt="Stay Connected" />
                                </div>
                            </div>
                            <div className="below_features_content">
                                <div className="no_1">
                                    <h5>Free and Unlimited Usage:</h5>
                                    <p>Enjoy all the features of our secure chat website without any subscription fees or hidden costs. Stay connected with your loved ones, colleagues, and friends without worrying about charges.</p>
                                </div>
                                <div className="no_2">
                                    <h5>Reliable Communication Anywhere:</h5>
                                    <p>Seamlessly sync your chats across all your devices. Whether you're on your phone, tablet, or desktop, you can stay connected and continue conversations without interruption.</p>
                                </div>
                                <div className="no_3">
                                    <h5>Always Up-to-Date:</h5>
                                    <p>Enjoy automatic updates that keep your website running smoothly with the latest features and security enhancements, without disrupting your connectivity.</p>
                                </div>
                            </div>
                        </div>
                        <div id="simple-list-item-3">
                            <div className="features_content">
                                <div className="left_content">
                                    <h1>Build Community</h1>
                                    <p id="under_heading">Simple group and community messaging to keep in touch with your closest groups and group conversations made simple.</p>
                                </div>
                                <div className="right_content">
                                    <img src="./Images/build_community.webp" alt="Build Community" />
                                </div>
                            </div>
                            <div className="below_features_content">
                                <div className="no_1">
                                    <h5>Create and Manage Private Groups:</h5>
                                    <p>Bring people together with private group chats that are secured with end-to-end encryption. Whether for friends, family, or colleagues, build your community in a safe and secure environment.</p>
                                </div>
                                <div className="no_2">
                                    <h5>Grow Your Community:</h5>
                                    <p>Start small and expand as needed. Increase the number of members in your group without sacrificing performance or security.</p>
                                </div>
                                <div className="no_3">
                                    <h5>Inclusive Community Building:</h5>
                                    <p>Building and joining communities within our website is completely free. Grow your groups and connect with others without worrying about any costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Features;
