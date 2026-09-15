# shop-web-client — Reals Shop

> Angular 21 · Nx 22 · Port **4202** (dev & Docker)

Không gian **Mua sắm** trong hệ sinh thái Reals Platform. Chuyên trách Storefront, catalog sản phẩm, giỏ hàng và luồng thanh toán từ creators.

## Workspace → [daccuong-uit/social-platform-workspace](https://github.com/daccuong-uit/social-platform-workspace)

---

## Chức năng

| Route | Mô tả |
|---|---|
| `/shop` | Shop Shell — Storefront chính |
| `/media` | Quản lý media sản phẩm |
| `/profile` | Hồ sơ cá nhân |
| `/settings` | Cài đặt tài khoản |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (Standalone, Signals-first) |
| Monorepo | Nx 22 |
| State | Angular Signals + RxJS |
| Styling | CSS custom properties (OKLCH tokens) |

## Cấu trúc thư mục

```
.
├── apps/web/
│   └── src/
│       ├── app/routes/        # app.routes.ts — gốc → /shop
│       └── environments/      # environment.ts
│
└── libs/
    ├── core/                  # AuthService, guards, interceptors
    ├── ui/                    # Shared UI components
    ├── entities/              # Domain models: profile, media, social
    └── features/
        ├── shop/              # ShopShellComponent + ShopComponent
        ├── media/             # Media management
        ├── profile/           # User profile
        └── settings/          # Settings
```

## Chạy local

```bash
npm install
npm start          # → http://localhost:4202
npm run build
```

## Docker

```bash
# Từ workspace root:
docker compose build fe-shop
docker compose up -d fe-shop

# → http://localhost:4202
```

Nginx phục vụ Angular bundle và proxy `/api/*` → `gateway:3000`.
